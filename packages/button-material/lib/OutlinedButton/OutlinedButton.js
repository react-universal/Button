import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase/ButtonBase';
import {default as ColorUtil} from 'color';
import {Hoverable} from '../../../button/lib/Hoverable';

const OutlinedButton = ({
  containerStyle,
  disabled,
  color,
  textColor,
  rippleColor,
  theme,
  borderSize,
  ...props
}) => {
  const [stateBackgroundColor, setStateBackgroundColor] = useState(null);

  function getButtonStyles() {
    let borderColor = textColor ? textColor : theme.primary.main;

    const buttonStyles = [
      theme.outlinedButton,
      {
        backgroundColor: getBackgroundColor(),
        borderColor: disabled ? 'rgba(0, 0, 0, 0.26)' : borderColor,
        borderWidth: borderSize ? borderSize : theme.outlinedButton.borderWidth,
      },
    ];
    return buttonStyles;
  }

  function getBackgroundColor() {
    let backgroundColor = color ? color : 'transparent';

    backgroundColor = stateBackgroundColor
      ? stateBackgroundColor
      : backgroundColor;

    return disabled ? 'transparent' : backgroundColor;
  }

  function getRippleColor() {
    let implementedRippleColor = textColor ? textColor : theme.primary.main;

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  function getTextColor() {
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

OutlinedButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rippleColor: PropTypes.string,
  theme: PropTypes.object,
  borderSize: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default OutlinedButton;
