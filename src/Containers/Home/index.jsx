import React from 'react';
import Header from '../../Components/Header';
import Frame from '../../Components/Frame';

import { SEARCH_IN_VERSION } from '../../API';
import useFetch from '../../Hooks/useFetch';
import { Wrapper } from './styled';

const Home = () => {
  const VERSION = '11.18.1';

  const { data, loading, request } = useFetch();
  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_IN_VERSION(VERSION);
      request(url, options);
    }
    fetchChampions();
  }, [request]);

  if (loading) <p>Loading...</p>;
  if (data)
    return (
      <section>
        <Header />
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return (
              <Frame
                name={data.data[championName].id}
                key={data.data[championName].id}
                image={`http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${championName}.png`}
              />
            );
          })}
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
