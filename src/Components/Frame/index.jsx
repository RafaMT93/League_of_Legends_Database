import React from 'react';
import { WrapperFrame, WrapperChampionName, WrapperSection } from './styled';

const Frame = ({ name, image }) => {
  return (
    <WrapperSection>
      <WrapperFrame image={image}></WrapperFrame>
      <WrapperChampionName>{name}</WrapperChampionName>
    </WrapperSection>
  );
};

export default Frame;
