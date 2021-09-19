import React from 'react';
import Header from '../../Components/Header';
import Frame from '../../Components/Frame';

import { SEARCH_IN_VERSION } from '../../API';
import { Wrapper } from './styled';

const Home = () => {
  React.useEffect(() => {}, []);

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
