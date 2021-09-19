import React from 'react';
import Header from '../../Components/Header';
import Frame from '../../Components/Frame';

import { SEARCH_IN_VERSION } from '../../API';
import useFetch from '../../Hooks/useFetch';
import { Wrapper } from './styled';

const Home = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_IN_VERSION();
      request(url, options);
    }
    fetchChampions();
  }, []);
  console.log(data.data);

  return (
    <section>
      <Header />
      <Wrapper>
        <Frame />
      </Wrapper>
    </section>
  );
};

export default Home;
