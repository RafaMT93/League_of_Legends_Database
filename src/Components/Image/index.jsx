import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, title, height, width, radius }) => {
  return (
    <img
      src={src}
      style={{
        width: `${width}`,
        height: `${height}px`,
        borderRadius: `${radius}`,
      }}
      alt={alt}
      title={title}
    />
  );
};

Image.propTypes = {
  height: PropTypes.number,
};

Image.defaultProps = {
  radius: '0px',
};

export default Image;
