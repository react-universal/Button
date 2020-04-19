import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  icon,
  iconPosition,
  iconSize,
  typeTextColor,
  loading,
  dense,
}) => {
  if (icon) {
    return React.cloneElement(icon, {
      style: {
        marginRight: iconPosition === 'left' ? 8 : 0,
        marginLeft: iconPosition === 'right' ? 8 : 0,
      },
      size: iconSize || (dense ? 14 : 18),
      color: typeTextColor ? typeTextColor : 'white',
    });
  }
  return null;
};

Icon.propTypes = {
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
  iconSize: PropTypes.number,
  typeTextColor: PropTypes.string,
  loading: PropTypes.bool,
  dense: PropTypes.bool,
};

export default Icon;
