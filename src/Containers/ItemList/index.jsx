import React from 'react';
import Loading from '../../Components/Loading';
import Frame from '../../Components/Frame';
import Modal from '../../Components/Modal';
import Image from '../../Components/Image';

import useFetch from '../../Hooks/useFetch';
import { Row, Col } from 'antd';
import { SEARCH_ITENS } from '../../API';
import { Wrapper } from './styled';

const ItemList = ({ version }) => {
  const { data, loading, request } = useFetch();
  const [opacity, setOpacity] = React.useState(1);
  const [modalOpened, setModalOpened] = React.useState(false);
  const [itemContent, setItemContent] = React.useState({});

  React.useEffect(() => {
    async function fetchItens() {
      const { url, options } = SEARCH_ITENS(version);
      request(url, options);
    }
    fetchItens();
  }, [version, request]);

  function handleOpenModal(
    idItem,
    imgSrc,
    itemName,
    itemTag,
    itemGoldBase,
    itemGoldSeller,
    itemDesc,
  ) {
    setItemContent({
      idItem,
      imgSrc,
      itemName,
      itemTag,
      itemGoldBase,
      itemGoldSeller,
      itemDesc,
    });
    setModalOpened(true);
  }

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
                gold={data.data[item].gold.base}
                sell={data.data[item].gold.sell}
                description={data.data[item].description}
                width={'4rem'}
                height={'4rem'}
                opacity={opacity}
                onClick={() =>
                  handleOpenModal(
                    item,
                    `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${data.data[item].image.full}`,
                    data.data[item].name,
                    data.data[item].tags,
                    data.data[item].gold.base,
                    data.data[item].gold.sell,
                    data.data[item].description,
                  )
                }
              />
            );
          })}
        </Wrapper>

        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
          <Row gutter={[8, 8]}>
            <Col span={3}>
              <Image src={itemContent.imgSrc} width={'100%'} radius={'30px'} />
            </Col>
            <Col span={21}>
              <p>{itemContent.idItem}</p>
              <p>{itemContent.itemName}</p>
              <p>{itemContent.itemTag}</p>
              <p>{itemContent.itemGoldBase}</p>
              <p>{itemContent.itemGoldSeller}</p>
              <p>{itemContent.itemDesc}</p>
            </Col>
          </Row>
        </Modal>
      </>
    );
  return null;
};

export default ItemList;
