import React from 'react';
import PropTypes from 'prop-types';

import TextButton from './TextButton/TextButton.js';
import OutlinedButton from './OutlinedButton/OutlinedButton.js';
import ContainedButton from './ContainedButton/ContainedButton.js';
import FlatButton from './FlatButton/FlatButton.js';

const Button = ({type, ...rest}) => {
  if (type === 'outlined') {
    return <OutlinedButton {...rest} />;
  } else if (type === 'contained') {
    return <ContainedButton {...rest} />;
  } else if (type === 'flat') {
    return <FlatButton {...rest} />;
  } else {
    return <TextButton {...rest} />;
  }
};

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
