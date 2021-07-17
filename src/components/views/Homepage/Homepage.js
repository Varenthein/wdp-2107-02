import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import ShopNowProducts from '../../features/ShopNowProducts/ShopNowProductsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <ShopNowProducts />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <Gallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
