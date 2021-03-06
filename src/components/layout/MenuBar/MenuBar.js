import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={'col-md-12 col-lg-5 ' + styles.productSearch}>
          <ProductSearch />
        </div>
        <input type='checkbox' id='hamburger' className={styles.hamburger}></input>
        <label htmlFor='hamburger' className={styles.hamburger_label}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </label>

        <div className={'col-md-12 col-lg-7 ' + styles.menu}>
          <ul>
            <li>
              <a href='/' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='/shop/furniture'>Furniture</a>
            </li>
            <li>
              <a href='/shop/chair'>Chair</a>
            </li>
            <li>
              <a href='/shop/table'>Table</a>
            </li>
            <li>
              <a href='/shop/sofa'>Sofa</a>
            </li>
            <li>
              <a href='/shop/bedroom'>Bedroom</a>
            </li>
            <li>
              <a href='/shop/blog'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
