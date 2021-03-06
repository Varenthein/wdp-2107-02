import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';

import SwipeComponent from '../../common/Swipeable/SwipeComponent';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
  };

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }

  handleCategoryChange(newCategory) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }

  render() {
    const { categories, products, addRating, device } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    let itemsPerPage;
    if (device === 'mobile') {
      itemsPerPage = 2;
    } else if (device === 'tablet') {
      itemsPerPage = 3;
    } else if (device === 'desktop') {
      itemsPerPage = 8;
    }
    const pagesCount = Math.ceil(categoryProducts.length / itemsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <SwipeComponent
        itemsCount={pagesCount}
        activeItem={this.state.activePage}
        swipeAction={this.handlePageChange.bind(this)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3> New furniture </h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul> {dots} </ul>
                </div>
              </div>
              <div className='row no-gutters align-items-end'>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory ? styles.active : ''}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={
                'row' +' ' + styles.row + (isFading ? ' ' + styles.fadeout : ' ' + styles.fadein)
              }
            >
              {categoryProducts
                .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
                .map((item, i) => (
                  <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                    <ProductBox
                      {...item}
                      number={i}
                      product={item}
                      addRating={addRating}
                      changeFavorite={this.props.setFav}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <ProductsCompare />
      </SwipeComponent>
    );
  }
}

NewFurniture.propTypes = {
  device: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  setFav: PropTypes.func,
  addRating: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
