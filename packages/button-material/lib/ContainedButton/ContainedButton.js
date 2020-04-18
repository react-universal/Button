import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Animated, Platform} from 'react-native';

import ButtonBase from '../ButtonBase/ButtonBase';
import {Hoverable} from '../../../button/lib/Hoverable';
import {default as ColorUtil} from 'color';

const ContainedButton = ({
  disabled,
  radius,
  theme,
  containerStyle,
  fullWidth,
  color,
  rippleColor,
  textColor,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [stateBackgroundColor, setStateBackgroundColor] = useState(null);
  const [elevation, setElevation] = useState(new Animated.Value(6));
  const [animatedShadowRadius, setAnimatedShadowRadius] = useState(
    new Animated.Value(4.65),
  );
  const [animatedShadowOpacity, setAnimatedShadowOpacity] = useState(
    new Animated.Value(0.27),
  );
  const [animatedShadowHeight, setAnimatedShadowHeight] = useState(
    new Animated.Value(3),
  );
  const [animatedShadowWidth, setAnimatedShadowWidth] = useState(
    new Animated.Value(1),
  );

  function animateShadow(active) {
    const animationDuration = active ? 400 : 150;
    if (Platform.OS === 'android') {
      const userElevation = active ? 10 : 6;
      Animated.timing(elevation, {
        toValue: userElevation,
        duration: animationDuration,
      });
    } else {
      const shadowRadius = active ? 6.65 : 4.65;
      const shadowShadowOpacity = active ? 0.27 : 0.35;
      const shadowHeight = active ? 5 : 3;
      const shadowWidth = active ? 1.5 : 1;

      Animated.parallel([
        Animated.timing(animatedShadowRadius, {
          toValue: shadowRadius,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowOpacity, {
          toValue: shadowShadowOpacity,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowHeight, {
          toValue: shadowHeight,
          duration: animationDuration,
        }),
        Animated.timing(animatedShadowWidth, {
          toValue: shadowWidth,
          duration: animationDuration,
        }),
      ]).start();
    }
  }

  function getShadowStyle() {
    const style = {
      shadowColor: '#000',
      shadowOffset: {
        width: animatedShadowWidth,
        height: animatedShadowHeight,
      },
      shadowOpacity: animatedShadowOpacity,
      shadowRadius: animatedShadowRadius,
      elevation: elevation,
      backgroundColor: 'transparent',
      borderRadius: theme.button.borderRadius,
    };
    return style;
  }

  function getButtonStyles() {
    const buttonStyles = {
      ...theme.containedButton,
      backgroundColor: getBackgroundColor(),
    };

    return buttonStyles;
  }

  function getBackgroundColor() {
    let backgroundColor = color ? color : theme.primary.main;

    backgroundColor = disabled ? 'rgba(0, 0, 0, 0.12)' : backgroundColor;

    return stateBackgroundColor ? stateBackgroundColor : backgroundColor;
  }

  function getRippleColor() {
    let implementedRippleColor = 'rgba(255, 255,255, 0.56)';

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  function getTextColor() {
    let implementedTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (textColor) implementedTextColor = textColor;

    return implementedTextColor;
  }

  function handleHover(toggle) {
    const bgColor = getBackgroundColor();
    let implementedColor;

    if (ColorUtil(bgColor).isDark()) {
      implementedColor = toggle
        ? ColorUtil(bgColor)
            .lighten(0.15)
            .rgb()
            .string()
        : null;
    } else {
      implementedColor = toggle
        ? ColorUtil(bgColor)
            .darken(0.15)
            .rgb()
            .string()
        : null;
    }

    setStateBackgroundColor(implementedColor);
  }

  const handleOnPressIn = (...args) => {
    animateShadow(true);

    if (onPressIn) onPressIn(args);
  };
  const handleOnPressOut = (...args) => {
    animateShadow(false);

    if (onPressOut) onPressOut(args);
  };
  return (
    <Hoverable
      onHoverIn={() => handleHover(true)}
      onHoverOut={() => handleHover(false)}
      style={[containerStyle]}>
      {() => (
        <Animated.View
          useNativeDriver={false}
          style={[
            disabled ? {} : getShadowStyle(),
            {
              alignSelf: fullWidth ? 'auto' : 'flex-start',
              borderRadius: radius ? radius : theme.button.borderRadius,
            },
            containerStyle,
          ]}>
          <ButtonBase
            typeRippleColor={getRippleColor()}
            typeTextColor={getTextColor()}
            typeButtonStyles={getButtonStyles()}
            onPressIn={handleOnPressIn}
            onPressOut={handleOnPressOut}
            disabled={disabled}
            radius={radius}
            theme={theme}
            fullWidth={fullWidth}
            {...props}
          />
        </Animated.View>
      )}
    </Hoverable>
  );
};

ContainedButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rippleColor: PropTypes.string,
  theme: PropTypes.object,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  radius: PropTypes.number,
  fullWidth: PropTypes.bool,
};

export default ContainedButton;
