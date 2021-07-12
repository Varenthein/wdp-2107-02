import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealsProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const HotDealsProducts = ({ name, image, price }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        <div className={styles.promoCounter}>
          <div className='row'>
            <div className={`col-3 ${styles.dots}`}>
              <h5>25</h5>
              <p>DAYS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>10</h5>
              <p>HRS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>45</h5>
              <p>MINS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>30</h5>
              <p>SECS</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>View more</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

HotDealsProducts.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default HotDealsProducts;
