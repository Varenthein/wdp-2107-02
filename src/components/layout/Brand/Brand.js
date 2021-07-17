import React from 'react';
import styles from './Brand.module.scss';
import PropTypes from 'prop-types';

const Brand = ({ src }) => (
  <div className={'col-2 ' + styles.root}>
    <img src={src} alt='Brand'></img>
  </div>
);

Brand.propTypes = {
  src: PropTypes.string,
};

export default Brand;
