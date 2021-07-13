import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = ({ brands }) => {
  const [n, setN] = useState(6);
  const [activePage, setActivePage] = useState(0);
  useEffect(() => {
    function changeSlider() {
      if (window.innerWidth > 1200) {
        setN(6);
      } else if (window.innerWidth <= 1200 && window.innerWidth > 540) {
        setN(3);
      } else if (window.innerWidth <= 540) {
        setN(1);
      }
    }
    window.addEventListener('resize', changeSlider);
  });
  const next = e => {
    e.preventDefault();
    if (activePage >= 0 && activePage < brands.length / n - 1) {
      setActivePage(activePage + 1);
    }
  };
  const prev = e => {
    e.preventDefault();
    if (activePage > 0 && activePage <= brands.length / n - 1) {
      setActivePage(activePage - 1);
    }
  };
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className='row'>
          <div
            className={
              'col-1 d-flex justify-content-end align-items-center ' + styles.divButton
            }
          >
            <Button variant='small' className={styles.button} onClick={prev}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={'col-10 d-flex ' + styles.imageBox}>
            {brands.slice(activePage * n, (activePage + 1) * n).map(brandData => (
              <img key={brandData.id} src={brandData.src} alt='brands1' />
            ))}
          </div>
          <div className={'col-1 d-flex align-items-center ' + styles.divButton}>
            <Button variant='small' className={styles.button} onClick={next}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
