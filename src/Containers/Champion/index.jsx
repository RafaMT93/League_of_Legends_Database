import React from 'react';
import useFetch from '../../Hooks/useFetch';

import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';
import {
  WrapperChampionDiv,
  WrapperChampionH1,
  WrapperContent,
  WrapperLore,
  WrapperInfo,
} from './styled';

const Champion = () => {
  const VERSION = '11.18.1';
  const params = useParams();
  const { data, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_CHAMPION(VERSION, params.name);
      request(url, options);
    }
    fetchChampions();
  }, [params.name, request]);

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <>
        <WrapperChampionDiv
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`}
        >
          <Row gutter={[16, 16]}>
            <Col span={24} md={16}>
              <WrapperInfo>
                <p>Ataque: {data.data[params.name].info.attack}</p>
                <p>Defesa: {data.data[params.name].info.defense}</p>
                <p>Dificuldade: {data.data[params.name].info.difficulty}</p>
                <p>Magic: {data.data[params.name].info.magic}</p>
              </WrapperInfo>
            </Col>
          </Row>
        </WrapperChampionDiv>
        <WrapperContent>
          <WrapperChampionH1>{data.data[params.name].name}</WrapperChampionH1>
          <WrapperLore>{data.data[params.name].lore}</WrapperLore>
          <p>{console.log(data.data[params.name])}</p>
          <Row gutter={[16, 16]}>
            <Col span={24} md={12}>
              <h1>Dicas para jogar de {data.data[params.name].name}</h1>
              <ul>
                {data.data[params.name].allytips.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
            </Col>
            <Col span={24} md={12}>
              <h1>Dicas para contra {data.data[params.name].name}</h1>
              <ul>
                {data.data[params.name].enemytips.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </WrapperContent>
      </>
    );
  return null;
};

export default Champion;
