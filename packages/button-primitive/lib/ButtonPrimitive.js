import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';
import Hoverable from './Hoverable';

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
  onHoverOut,
  onHoverIn,
  hoverStyles,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
      {...props}>
      <Hoverable onHoverOut={onHoverOut} onHoverIn={onHoverIn}>
        {isHovererd => (
          <View
            style={[
              style,
              isHovererd && hoverStyles,
              active && activeStyles,

              loading && loadingStyles,
              disabled && disabledStyles,
            ]}>
            {left}
            {children}
            {right}
          </View>
        )}
      </Hoverable>
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

  onHoverOut: PropTypes.func,
  onHoverIn: PropTypes.func,
  hoverStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  testID: PropTypes.string,
};

export default Button;
