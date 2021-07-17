import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, tooltipText }) => {
  const tooltipRef = useRef();

  const mouseEnter = () => {
    tooltipRef.current.style.opacity = 1;
  };
  const mouseLeave = () => {
    tooltipRef.current.style.opacity = 0;
  };

  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip} ref={tooltipRef}>
        <div className={styles.tooltipButton} />
        {tooltipText}
      </div>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {children}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  tooltipText: PropTypes.string,
  children: PropTypes.object,
};

export default Tooltip;
