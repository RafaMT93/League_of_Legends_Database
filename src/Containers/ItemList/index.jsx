import React from 'react';
import Loading from '../../Components/Loading';
import useFetch from '../../Hooks/useFetch';
import { SEARCH_ITENS } from '../../API';
import { Wrapper } from './styled';
import Frame from '../../Components/Frame';

const ItemList = ({ version }) => {
  const { data, loading, request } = useFetch();
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    async function fetchItens() {
      const { url, options } = SEARCH_ITENS(version);
      request(url, options);
    }
    fetchItens();
  }, [version, request]);

  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <Wrapper>
          {Object.keys(data.data).map((item) => {
            return (
              <Frame
                title={data.data[item].name}
                image={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${data.data[item].image.full}`}
                id={data.data[item].name}
                key={data.data[item].image.full}
                tag={data.data[item].tags}
                width={'8rem'}
                height={'8rem'}
                opacity={opacity}
                type={'Item'}
              />
            );
          })}
        </Wrapper>
        {console.log(data)}
      </>
    );
  return null;
};

export default ItemList;
