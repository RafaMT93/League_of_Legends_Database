import React from 'react';
import { Row, Col } from 'antd';
import {
  WrapperInfo,
  WrapperInfoDetails,
  WrapperInfoDetailsInRight,
} from './styled';

const ChampionInfo = ({
  attack,
  defense,
  difficulty,
  magic,
  tags,
  partype,
}) => {
  return (
    <Row gutter={[16, 16]}>
      <WrapperInfo span={24} md={8}>
        <p>Informações Básicas</p>
        <br />
        <p>Ataque: {attack}</p>
        <p>Defesa: {defense}</p>
        <p>Dificuldade: {difficulty}</p>
        <p>Magic: {magic}</p>
      </WrapperInfo>
      <WrapperInfoDetails span={24} md={8}>
        <Row gutter={[16, 16]}>
          <Col span={14} md={7}>
            <p>
              <b>Função Principal</b>
            </p>
            <p>
              <i>{tags[0]}</i>
            </p>
          </Col>
          <Col span={14} md={7}>
            {tags[1] && (
              <p>
                <b>Função Secundária</b>
              </p>
            )}
            <p>
              <i>{tags[1]}</i>
            </p>
          </Col>
        </Row>
      </WrapperInfoDetails>
      <WrapperInfoDetailsInRight span={24} md={8}>
        <p>
          <b>Barra Secundária</b>
        </p>
        <p>
          <i>{partype}</i>
        </p>
      </WrapperInfoDetailsInRight>
    </Row>
  );
};

export default ChampionInfo;
