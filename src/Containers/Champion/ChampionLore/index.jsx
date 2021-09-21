import React from 'react';
import { Col } from 'antd';
import {
  WrapperChampionH1Name,
  WrapperChampionTitle,
  WrapperContent,
  WrapperLore,
  WrapperH1,
  WrapperTips,
} from '../styled';

const Lore = ({ name, title, lore, allytips, enemytips }) => {
  return (
    <WrapperContent>
      <WrapperChampionH1Name>{name}</WrapperChampionH1Name>
      <WrapperChampionTitle>{title}</WrapperChampionTitle>

      <WrapperLore>{lore}</WrapperLore>
      <WrapperTips gutter={[16, 16]}>
        <Col span={24} md={12}>
          <WrapperH1>Dicas para jogar de {name}</WrapperH1>
          <ul>
            {allytips.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </Col>
        <Col span={24} md={12}>
          <WrapperH1>Dicas para jogar contra {name}</WrapperH1>
          <ul>
            {enemytips.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </Col>
      </WrapperTips>
    </WrapperContent>
  );
};

export default Lore;
