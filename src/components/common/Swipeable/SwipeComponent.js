import React from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';

const SwipeComponent = ({ swipeAction, activeItem, itemsCount, children }) => {
  const onSwipedRight = () => {
    if (activeItem - 1 >= 0) {
      swipeAction(activeItem - 1);
    }
  };

  const onSwipedLeft = () => {
    if (activeItem + 1 < itemsCount) {
      swipeAction(activeItem + 1);
    }
  };

  return (
    <Swipe
      nodeName='div'
      detectTouch='true'
      detectMouse='true'
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
    >
      {children}
    </Swipe>
  );
};

SwipeComponent.propTypes = {
  swipeAction: PropTypes.func,
  activeItem: PropTypes.number,
  itemsCount: PropTypes.number,
  children: PropTypes.node,
  detectTouch: PropTypes.bool,
  detectMouse: PropTypes.bool,
};

export default SwipeComponent;