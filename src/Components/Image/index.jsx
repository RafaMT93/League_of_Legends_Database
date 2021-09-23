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

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;
