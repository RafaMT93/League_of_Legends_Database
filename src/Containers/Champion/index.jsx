import React from 'react';
import useFetch from '../../Hooks/useFetch';

import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';
import { WrapperChampionDiv, WrapperChampionH1 } from './styled';

const Champion = () => {
  const VERSION = '11.18.1';
  const params = useParams();
  const { data, request } = useFetch();

  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_CHAMPION(VERSION, params.name);
      request(url, options);
    }
    fetchChampions();
  }, [params.name, request]);

  if (data)
    return (
      <WrapperChampionDiv
        image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`}
      >
        <WrapperChampionH1>{data.data[params.name].name}</WrapperChampionH1>
        <p>{console.log(data.data[params.name])}</p>
        <p>{data.data[params.name].blurb}</p>
      </WrapperChampionDiv>
    );
  return null;
};

export default Champion;
