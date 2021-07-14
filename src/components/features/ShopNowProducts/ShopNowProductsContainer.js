import { connect } from 'react-redux';

import ShopNowProducts from './ShopNowProducts';

const mapStateToProps = state => {
  const hotDeals = state.promotedProducts.hotDeals;
  const shopNow = state.promotedProducts.shopNow;

  return {
    hotDeals,
    ...shopNow,
  };
};

export default connect(mapStateToProps)(ShopNowProducts);
