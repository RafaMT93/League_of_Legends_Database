import React from 'react';
import { WrapperFrame, WrapperName, WrapperSection } from './styled';
import { Link } from 'react-router-dom';

const Frame = ({ name, image, id, width, height, opacity, type, title }) => {
  return (
    <Link to={`/${type}/${id}`}>
      <WrapperSection>
        <WrapperFrame
          image={image}
          width={width}
          height={height}
          opacity={opacity}
          title={title}
        ></WrapperFrame>
        {name && <WrapperName>{name}</WrapperName>}
      </WrapperSection>
    </Link>
  );
};

export default Frame;
