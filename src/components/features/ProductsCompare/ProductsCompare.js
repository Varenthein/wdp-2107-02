import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCompare.module.scss';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

const ProductsCompare = ({ compare, removeCompare }) => {
  const products = compare.products;

  if (products && products.length > 0) {
    return (
      <div className={styles.container}>
        <h3>Product comparison</h3>
        <div className='col-2'>
          <Button className={styles.button}>Compare</Button>
        </div>
        <div className={styles.comparision}>
          {products &&
            products.map(product => (
              <div
                className={styles.comp}
                key={product.id}
                onClick={() => removeCompare(product.id)}
              >
                <div className={styles.image}>
                  <img src={product.image} alt='' />
                </div>
                <div className={styles.close}>
                  <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

ProductsCompare.propTypes = {
  compare: PropTypes.object.isRequired,
  removeCompare: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductsCompare;
