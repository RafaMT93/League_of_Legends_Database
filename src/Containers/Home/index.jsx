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

  if (loading) <p>Loading...</p>;
  if (data)
    return (
      <section>
        <Header />
        <Wrapper>
          {console.log(data)}
          <Frame name="Thresh" />
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
