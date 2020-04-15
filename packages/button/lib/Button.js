import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';
import ButtonText from './ButtonText';
import Icon from './Icon';

const Button = ({
  disabled,
  disableRipple,
  loading,
  children,
  onPress,
  theme,
  typeButtonStyles,
  fullWidth,
  typeRippleColor,
  dense = false,
  style,
  onPressIn,
  onPressOut,
  hideLabel,
  radius,
  icon,
  iconPosition = 'left',
  testID,
  useInputCasing = false,
  text,
  textStyle,
  typeTextColor,
  iconSize,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled || disableRipple || loading}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: hideLabel ? 'column' : 'row',
          width: fullWidth ? '100%' : 'auto',
          minWidth: dense ? 'auto' : 64,
          height: dense ? 32 : 36,
          minHeight: dense ? 32 : 36,
          paddingLeft: iconPosition === 'left' && icon ? 12 : 16,
          paddingRight: iconPosition === 'right' && icon ? 12 : 16,
          borderRadius: radius ? radius : theme && theme.button.borderRadius,
        },
        typeButtonStyles,
        style,
      ]}
      testID={testID}
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View>
        {iconPosition === 'left' ? (
          <Icon
            icon={icon}
            iconPosition={iconPosition}
            iconSize={iconSize}
            typeTextColor={typeTextColor}
            loading={loading}
            dense={dense}
          />
        ) : null}
        {children ? (
          children
        ) : (
          <ButtonText
            text={text}
            textStyle={textStyle}
            typeTextColor={typeTextColor}
            theme={theme}
            hideLabel={hideLabel}
            dense={dense}
            useInputCasing={useInputCasing}
          />
        )}
        {iconPosition === 'right' ? (
          <Icon
            icon={icon}
            iconPosition={iconPosition}
            iconSize={iconSize}
            typeTextColor={typeTextColor}
            loading={loading}
            dense={dense}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

Button.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.node,

  type: PropTypes.string,
  onPress: PropTypes.func,

  loading: PropTypes.bool,
  loader: PropTypes.node,
  hideLabel: PropTypes.bool,

  color: PropTypes.string,
  radius: PropTypes.number,

  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,

  icon: PropTypes.node,
  iconPosition: PropTypes.string,
  iconSize: PropTypes.number,

  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,

  text: PropTypes.string,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  useInputCasing: PropTypes.bool,

  typeTextColor: PropTypes.string,
  typeButtonStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  testID: PropTypes.string,
};

export default Button;
