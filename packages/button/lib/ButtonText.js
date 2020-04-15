import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ButtonText = ({
  text,
  textStyle,
  typeTextColor,
  theme,
  hideLabel,
  dense,
  useInputCasing,
}) => {
  if (hideLabel) return null;
  return (
    <Text
      numberOfLines={1}
      style={[
        theme.buttonText,
        {
          color: typeTextColor,
          fontSize: dense ? 13 : theme.buttonText.fontSize,
          letterSpacing: dense ? 0.3 : theme.buttonText.letterSpacing,
        },
        textStyle,
      ]}>
      {useInputCasing ? text : text.toUpperCase()}
    </Text>
  );
};

export default ButtonText;
