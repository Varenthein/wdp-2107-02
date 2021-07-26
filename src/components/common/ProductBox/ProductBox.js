import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  isFavourite,
  addFavourite,
  removeFavourite,
  oldPrice,
  image,
  myRating,
  addRating,
  toFavorite,
  toCompare,
  compareCount,
  setCompare,
}) => {
  const handleFavourite = event => {
    event.preventDefault();
    if (isFavourite) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  };
  const toCompareHandler = event => {
    event.preventDefault();
    const maxToCompare = 4;
    if (compareCount < maxToCompare) {
      setCompare({ id, image });
    } else {
      alert('You can compare maximum of 4 products!');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={'furniture'} className={styles.image} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <StarRating myRating={myRating} stars={stars} addRating={addRating} id={id} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={isFavourite ? styles.favourite : ''}
            onClick={handleFavourite}
          >
            <FontAwesomeIcon icon={faHeart} toFavorite={toFavorite}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button variant='outline' onClick={toCompareHandler}>
            <FontAwesomeIcon icon={faExchangeAlt} toCompare={toCompare}>
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice}</div>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  oldPrice: PropTypes.number,
  image: PropTypes.string,
  myRating: PropTypes.any,
  addRating: PropTypes.func,
  toCompare: PropTypes.bool,
  toFavorite: PropTypes.bool,
  setCompare: PropTypes.func.isRequired,
  compareCount: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  addFavourite: PropTypes.func,
  removeFavourite: PropTypes.func,
  handleFavourite: PropTypes.func,
};

export default ProductBox;
