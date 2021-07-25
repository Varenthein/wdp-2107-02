import React from 'react';
import PropTypes from 'prop-types';

import styles from './ShopNowProducts.module.scss';
import Carousel from '../../common/Carousel/Carousel';
import HotDealsProducts from '../HotDealsProducts/HotDealsProducts';

const ShopNowProducts = ({ hotDeals, title, subTitle, spanTitle, images, button }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <HotDealsProducts {...hotDeals} />
          </div>
          <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <Carousel
              images={images}
              title={title}
              subTitle={subTitle}
              spanTitle={spanTitle}
              button={button}
              className={styles.titleBelt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ShopNowProducts.propTypes = {
  hotDeals: PropTypes.object,
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  images: PropTypes.array,
};

export default ShopNowProducts;
