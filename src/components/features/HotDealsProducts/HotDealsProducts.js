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
import Carousel from '../../common/Carousel/Carousel';
import StarRating from '../../common/StarRating/StarRating';

const HotDealsProducts = ({
  name,
  products,
  price,
  oldPrice,
  stars,
  myRating,
  addRating,
  id,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Carousel
          images={products}
          height={200}
          withButtons={false}
          withDescription={false}
          autoPlay
          withHeader
          render={activeProduct => (
            <>
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
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>

              <div className={styles.content}>
                <h5>{activeProduct.name}</h5>
                <div className={styles.stars}>
                  <StarRating
                    myRating={myRating}
                    stars={activeProduct.stars}
                    addRating={addRating}
                    id={id}
                  />
                </div>
              </div>

              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faEye}>View more</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.price}>
                  <div className={styles.oldPrice}>{activeProduct.oldPrice}</div>
                  <Button noHover variant='small'>
                    $ {activeProduct.price}
                  </Button>
                </div>
              </div>
            </>
          )}
        />
      </div>
    </div>
  );
};

HotDealsProducts.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  stars: PropTypes.number,
  id: PropTypes.string,
  myRating: PropTypes.any,
  addRating: PropTypes.func,
  products: PropTypes.array,
};

export default HotDealsProducts;
