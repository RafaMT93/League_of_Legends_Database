import React from 'react';
import { WrapperFrame, WrapperChampionName, WrapperSection } from './styled';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton';

const Frame = ({ name, image, id, width, height }) => {
  /*   const [imageLoad, setImageLoad] = React.useState(true);
   */ const [opacity, setOpacity] = React.useState(1);

  return (
    <Link to={`/Champion/${id}`}>
      <WrapperSection>
        <Skeleton height={8} width={8} />
        <WrapperFrame
          image={image}
          width={width}
          height={height}
          opacity={opacity}
        ></WrapperFrame>
        <WrapperChampionName>{name}</WrapperChampionName>
      </WrapperSection>
    </Link>
  );
};

export default Frame;
