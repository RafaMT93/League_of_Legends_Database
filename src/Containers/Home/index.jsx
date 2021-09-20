import React from 'react';
import Header from '../../Components/Header';
import Frame from '../../Components/Frame';

import { SEARCH_IN_VERSION } from '../../API';
import useFetch from '../../Hooks/useFetch';
import { Wrapper } from './styled';

const Home = () => {
  const { data, loading, request } = useFetch();
  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_IN_VERSION('11.18.1');
      request(url, options);
    }
    fetchChampions();
  }, [request]);

  console.log(data);

  if (loading) <p>Loading...</p>;
  if (data)
    return (
      <section>
        <Header />
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return (
              <Frame
                name={data.data[championName].name}
                key={data.data[championName].id}
                image={`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/${championName}.png`}
              />
            );
          })}
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
