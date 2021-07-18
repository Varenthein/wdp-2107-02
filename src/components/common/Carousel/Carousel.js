import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Carousel.module.scss';
import Button from '../Button/Button';

const Carousel = ({
  images,
  title,
  subTitle,
  spanTitle,
  button,
  stars,
  height,
  withButtons,
  withDescription,
  withHeader,
  autoPlay,
  render,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nextImage = useCallback(() => {
    if (activeImageIndex + 1 === images.length) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(prev => prev + 1);
    }
  }, [activeImageIndex, images.length]);
  useEffect(() => {
    if (autoPlay) {
      let autoPlayTimeout = setTimeout(() => nextImage(), 3 * 1000);
      return () => {
        clearTimeout(autoPlayTimeout);
      };
    }
  }, [nextImage, autoPlay]);

  if (!images || images.length === 0) return null;
  const activeImage = images[activeImageIndex];
  const prevImage = () => {
    if (activeImageIndex - 1 < 0) {
      setActiveImageIndex(images.length - 1);
    } else {
      setActiveImageIndex(prev => prev - 1);
    }
  };
  return (
    <div className={styles.secondWindow}>
      {withHeader ? (
        <div className='row'>
          <div className={styles.hotDeals}>
            <div className='col-8'>
              <p>Hot deals</p>
            </div>
            <div className={styles.dots}>
              <ul>
                {images.map((image, key) => (
                  <li key={`dot-${key}`}>
                    <a
                      href='#'
                      className={activeImageIndex === key ? styles.active : null}
                    >
                      {' '}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
      <div className={styles.carousel} style={{ height: height }}>
        {images.map((image, key) => (
          <img
            key={`image-${key}`}
            src={image.href}
            alt={image.alt}
            className={activeImageIndex === key ? styles.fadein : styles.fadeout}
          />
        ))}
        {withDescription ? (
          <div className={styles.description}>
            <h2>
              {title}
              <span>{` ${spanTitle}`}</span>
              <p>{subTitle}</p>
            </h2>
            <Button variant='big'>{button}</Button>
          </div>
        ) : null}
      </div>
      {withButtons ? (
        <div className={styles.carouselButtonWrapper}>
          <div className='row'>
            <div className={`col ${styles.colLeft}`}>
              <a>
                <div className={styles.carouselButton} onClick={prevImage}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                </div>
              </a>
            </div>
            <div className={`col ${styles.colRight}`}>
              <a>
                <div className={styles.carouselButton} onClick={nextImage}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : null}
      {render(activeImage)}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  button: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  spanTitle: PropTypes.string,
  stars: PropTypes.number,
  height: PropTypes.number,
  withButtons: PropTypes.bool,
  withDescription: PropTypes.bool,
  withHeader: PropTypes.bool,
  autoPlay: PropTypes.bool,
  render: PropTypes.func,
};

Carousel.defaultProps = {
  images: [],
  height: 400,
  withButtons: true,
  withDescription: true,
  withHeader: false,
  autoPlay: false,
  render: () => {},
};

export default Carousel;
