import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, title, height, width }) => {
  return (
    <img
      src={src}
      style={{ width: `${width}px`, height: `${height}px` }}
      alt={alt}
      title={title}
    />
  );
};

Image.defaultProps = {
  width: 64,
  height: 64,
};

Image.propTypes = {
  width: PropTypes.number,
};

export default Image;
