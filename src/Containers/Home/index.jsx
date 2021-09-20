import React from 'react';
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

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <section>
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return (
              <Frame
                name={data.data[championName].name}
                key={data.data[championName].id}
                image={`http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${data.data[championName].id}.png`}
                id={data.data[championName].id}
              />
            );
          })}
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
