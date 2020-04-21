import {isHoverEnabled} from './HoverState';
import {element, func, oneOfType} from 'prop-types';
import React from 'react';

export default function Hoverable({onHoverIn, onHoverOut, children}) {
  const [isHovered, setHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);

  function handleMouseEnter() {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setHovered(true);
    }
  }

  function handleMouseLeave() {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setHovered(false);
    }
  }

  function handleGrant() {
    setShowHover(false);
  }

  function handleRelease() {}

  const child =
    typeof children === 'function'
      ? children(showHover && isHovered)
      : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: () => setShowHover(false),
    onResponderRelease: () => setShowHover(true),
    // if child is Touchable
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
}

Hoverable.displayName = 'Hoverable';

Hoverable.propTypes = {
  children: oneOfType([func, element]),
  onHoverIn: func,
  onHoverOut: func,
};
