import React from 'react';
import Frame from '../../Components/Frame';

import { Wrapper } from './styled';
import { SEARCH_IN_VERSION } from '../../API';
import useFetch from '../../Hooks/useFetch';

const Home = ({ version }) => {
  const { data, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = SEARCH_IN_VERSION(version);
    request(url, options);
  }, [request, version]);

  if (data)
    return (
      <section>
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return (
              <Frame
                name={data.data[championName].name}
                key={data.data[championName].id + ' - ' + version}
                image={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.data[championName].id}.png`}
                id={data.data[championName].id}
                tag={data.data[championName].tags}
                width={'8rem'}
                height={'8rem'}
              />
            );
          })}
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
