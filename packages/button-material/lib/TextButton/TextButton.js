import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase/ButtonBase';
import {default as ColorUtil} from 'color';
import {Hoverable} from '../../../';

const TextButton = ({
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
    const {theme} = this.props;

    const buttonStyles = [
      theme.textButton,
      {
        backgroundColor: this.getBackgroundColor(),
      },
    ];
    return buttonStyles;
  }

  function getBackgroundColor() {
    const userColor = color;

    let backgroundColor = userColor ? userColor : 'transparent';

    backgroundColor = stateBackgroundColor
      ? stateBackgroundColor
      : backgroundColor;

    return disabled ? 'transparent' : backgroundColor;
  }

  function getRippleColor() {
    const {textColor, theme, rippleColor} = this.props;

    let implementedRippleColor = textColor ? textColor : theme.primary.main;

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  function getTextColor() {
    const {textColor, disabled, theme} = this.props;

    let implementedTextColor = textColor ? textColor : theme.primary.main;

    return disabled ? 'rgba(0, 0, 0, 0.26)' : implementedTextColor;
  }

  function handleHover(toggle) {
    let implementedColor = toggle
      ? ColorUtil(getTextColor())
          .alpha(0.12)
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

TextButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rippleColor: PropTypes.string,
  theme: PropTypes.object,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default TextButton;
