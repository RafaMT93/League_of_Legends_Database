import React from 'react';
import { WrapperFrame, WrapperChampionName, WrapperSection } from './styled';
import { Link } from 'react-router-dom';

const Frame = ({ name, image, id, width, height }) => {
  return (
    <Link to={`/Champion/${id}`}>
      <WrapperSection>
        <WrapperFrame
          image={image}
          width={width}
          height={height}
        ></WrapperFrame>
        <WrapperChampionName>{name}</WrapperChampionName>
      </WrapperSection>
    </Link>
  );
};

export default Frame;
