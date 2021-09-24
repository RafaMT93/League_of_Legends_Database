import React from 'react';
import PropTypes from 'prop-types';
import { LoadingSkeleton } from './styled';

const Skeleton = ({ width, height }) => {
  return <LoadingSkeleton width={width} height={height} />;
};

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
export default Skeleton;
