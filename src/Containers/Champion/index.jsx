import React from 'react';
import Lore from './ChampionLore';
import ChampionInfo from './ChampionInfo';
import ChampionSkills from './ChampionSkills';
import { WrapperChampionDiv } from './styled';

import 'react-tabs/style/react-tabs.css';

import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';

const Champion = ({ version }) => {
  const params = useParams();
  const { data, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_CHAMPION(version, params.name);
      request(url, options);
    }
    fetchChampions();
  }, [params.name, request, version]);

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <>
        <WrapperChampionDiv
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`}
        >
          <ChampionInfo
            attack={data.data[params.name].info.attack}
            defense={data.data[params.name].info.defense}
            difficulty={data.data[params.name].info.difficulty}
            magic={data.data[params.name].info.magic}
            tags={data.data[params.name].tags}
            partype={data.data[params.name].partype}
          />
        </WrapperChampionDiv>
        <Lore
          name={data.data[params.name].name}
          title={data.data[params.name].title}
          lore={data.data[params.name].lore}
          allytips={data.data[params.name].allytips}
          enemytips={data.data[params.name].enemytips}
        />
        <ChampionSkills
          version={version}
          passiveImg={`http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${
            data.data[params.name].passive.image.full
          }`}
          altPassive={data.data[params.name].passive.name}
          titlePassive={data.data[params.name].passive.name}
          passiveDescription={data.data[params.name].passive.description}
          spells={data.data[params.name].spells}
          partype={data.data[params.name].partype}
        />

        <p>{console.log(data.data[params.name])}</p>
      </>
    );
  return null;
};

export default Champion;
