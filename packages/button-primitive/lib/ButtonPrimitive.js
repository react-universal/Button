import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';

const Button = ({
  disabled,
  disabledStyles,
  loading,
  loadingStyles,
  children,
  onPress,
  testID,
  style,
  right,
  left,
  activeStyles,
  active,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
      {...props}>
      <View
        style={[
          style,
          active && activeStyles,
          disabled && disabledStyles,
          loading && loadingStyles,
        ]}>
        {left}
        {children}
        {right}
      </View>
    </TouchableWithoutFeedback>
  );
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  right: PropTypes.node,
  left: PropTypes.node,

  onPress: PropTypes.func,

  loading: PropTypes.bool,
  loadingStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  activeStyles: PropTypes.bool,
  active: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  disabled: PropTypes.bool,
  disabledStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  testID: PropTypes.string,
};

export default Button;
