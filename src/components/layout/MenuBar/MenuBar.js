import React from 'react';
import PropTypes from 'prop-types';
import initialState from './../../../redux/initialState';
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
            {initialState.menu.map(item => (
              <li><a href={'/shop/' + item.id}>{item.name}</a></li>
            ))}
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
