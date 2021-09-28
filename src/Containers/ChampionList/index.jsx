import React from 'react';
import Frame from '../../Components/Frame';
import Loading from '../../Components/Loading';

import { Wrapper } from './styled';
import { SEARCH_IN_VERSION } from '../../API';
import useFetch from '../../Hooks/useFetch';
import Skeleton from '../../Components/Skeleton';

const Home = ({ version }) => {
  const { data, loading, request } = useFetch();
  const [opacity, setOpacity] = React.useState(0);
  const [skeleton, setSkeleton] = React.useState(true);

  React.useEffect(() => {
    const { url, options } = SEARCH_IN_VERSION(version);
    request(url, options);
  }, [request, version]);

  React.useEffect(() => {
    setSkeleton(false);
    setOpacity(1);
  }, [skeleton]);

  if (loading) return <Loading />;

  if (data)
    return (
      <section>
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return skeleton ? (
              <Skeleton
                key={data.data[championName].id + ' - ' + version}
                width={8}
                height={8}
              />
            ) : (
              <Frame
                name={data.data[championName].name}
                key={data.data[championName].id + ' - ' + version}
                image={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.data[championName].id}.png`}
                id={data.data[championName].id}
                tag={data.data[championName].tags}
                type={'Champion'}
                width={'8rem'}
                height={'8rem'}
                opacity={opacity}
              />
            );
          })}
        </Wrapper>
      </section>
    );

  return null;
};

export default Home;
