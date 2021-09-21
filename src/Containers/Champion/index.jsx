import React from 'react';
import useFetch from '../../Hooks/useFetch';

import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';
import {
  WrapperChampionDiv,
  WrapperChampionH1Name,
  WrapperChampionTitle,
  WrapperContent,
  WrapperLore,
  WrapperInfo,
  WrapperH1,
  WrapperTips,
  WrapperSecondaryBar,
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
            <WrapperInfo span={24} md={16}>
              <p>Informações Básicas</p>
              <br />
              <p>Ataque: {data.data[params.name].info.attack}</p>
              <p>Defesa: {data.data[params.name].info.defense}</p>
              <p>Dificuldade: {data.data[params.name].info.difficulty}</p>
              <p>Magic: {data.data[params.name].info.magic}</p>
            </WrapperInfo>
          </Row>
        </WrapperChampionDiv>
        <WrapperContent>
          <WrapperChampionH1Name>
            {data.data[params.name].name}
          </WrapperChampionH1Name>
          <WrapperChampionTitle>
            {data.data[params.name].title}
          </WrapperChampionTitle>

          <Row gutter={[16, 16]}>
            <Col span={24} md={12}>
              <Row gutter={[16, 16]}>
                <Col span={10} md={5}>
                  <p>
                    <i>Função Principal</i>
                  </p>
                  <p>{data.data[params.name].tags[0]}</p>
                </Col>
                <Col span={10} md={5}>
                  {data.data[params.name]?.tags[1] && (
                    <p>
                      <i>Função Secundária</i>
                    </p>
                  )}
                  <p>{data.data[params.name]?.tags[1]}</p>
                </Col>
              </Row>
            </Col>
            <WrapperSecondaryBar span={24} md={12}>
              <p>
                <i>Barra Secundária</i>
              </p>
              {data.data[params.name].partype}
            </WrapperSecondaryBar>
          </Row>
          <WrapperLore>{data.data[params.name].lore}</WrapperLore>
          <p>{console.log(data.data[params.name])}</p>
          <WrapperTips gutter={[16, 16]}>
            <Col span={24} md={12}>
              <WrapperH1>
                Dicas para jogar de {data.data[params.name].name}
              </WrapperH1>
              <ul>
                {data.data[params.name].allytips.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
            </Col>
            <Col span={24} md={12}>
              <WrapperH1>
                Dicas para contra {data.data[params.name].name}
              </WrapperH1>
              <ul>
                {data.data[params.name].enemytips.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
            </Col>
          </WrapperTips>
        </WrapperContent>
      </>
    );
  return null;
};

export default Champion;
