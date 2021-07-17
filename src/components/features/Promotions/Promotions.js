import React from 'react';
import styles from './Promotions.module.scss';
import PropTypes from 'prop-types';

const Promotions = ({ promotions }) => {
  const [leftContent, topContent, downContent] = [...promotions];

  // const url =
  //   'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div
              className={styles.promoLeft}
              style={{
                backgroundImage: `url('${leftContent.image}')`,
              }}
            >
              <div className={styles.promoLeftContent}>
                <h3 className={styles.title}>{leftContent.title}</h3>
                <span className={styles.strong}>{leftContent.strong}</span>
                <p className={styles.price}>{leftContent.price}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoRight} ${styles.promoRightTop}`}
                  style={{
                    backgroundImage: `url('${topContent.image}')`,
                  }}
                >
                  <div className={styles.promoRightContent}>
                    <h3 className={styles.title}>
                      <span className={styles.strong}>{topContent.strong} </span>
                      {topContent.title}
                    </h3>
                    <p className={styles.subtitle}>{topContent.subtitle}</p>
                    <p className={styles.price}>{topContent.price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoRight} ${styles.promoRightBottom}`}
                  style={{
                    backgroundImage: `url('${downContent.image}')`,
                  }}
                >
                  <h3 className={styles.title}>
                    <span className={styles.strong}>{downContent.strong} </span>
                    {downContent.title}
                  </h3>
                  <p className={styles.priceOff}>{downContent.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotions.propTypes = {
  promotions: PropTypes.array,
};

export default Promotions;
