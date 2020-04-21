import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase/ButtonBase';
import {Hoverable} from '../../../button/lib/Hoverable';
import {default as ColorUtil} from 'color';

const FlatButton = ({
  disabled,
  color,
  textColor,
  rippleColor,
  theme,
  containerStyle,
  ...props
}) => {
  const [stateBackgroundColor, setStateBackgroundColor] = useState(null);

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
    let implementedColor = toggle
      ? ColorUtil(getBackgroundColor())
          .darken(0.15)
          .rgb()
          .string()
      : null;

    setStateBackgroundColor(implementedColor);
  }

  return (
    <Hoverable
      onHoverIn={() => handleHover(true)}
      onHoverOut={() => handleHover(false)}
      style={containerStyle}>
      {() => (
        <ButtonBase
          typeRippleColor={getRippleColor()}
          typeTextColor={getTextColor()}
          typeButtonStyles={getButtonStyles()}
          {...props}
        />
      )}
    </Hoverable>
  );
};

FlatButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rippleColor: PropTypes.string,
  theme: PropTypes.object,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default FlatButton;
