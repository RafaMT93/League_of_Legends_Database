import React from 'react';
import { WrapperFrame, WrapperChampionName, WrapperSection } from './styled';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton';

const Frame = ({ name, image, id, width, height }) => {
  const [imageLoad, setImageLoad] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setImageLoad(image);
    setOpacity(1);
  }, [imageLoad]);

  return (
    <Link to={`/Champion/${id}`}>
      <WrapperSection>
        {imageLoad ? (
          <WrapperFrame
            image={image}
            width={width}
            height={height}
            opacity={opacity}
          ></WrapperFrame>
        ) : (
          <Skeleton height={8} width={8} />
        )}

        <WrapperChampionName>{name}</WrapperChampionName>
      </WrapperSection>
    </Link>
  );
};

export default Frame;
