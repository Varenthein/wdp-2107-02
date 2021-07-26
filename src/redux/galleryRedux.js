/* selectors */
export const getFeatured = ({ products }) =>
  products.filter(item => item.featured === true);

export const getTopSeller = ({ products }) =>
  products.filter(item => item.topSeller === true);

export const getSaleOff = ({ products }) => products.filter(item => item.oldPrice);

export const getTopRated = ({ products }) => products.filter(item => item.stars >= 3);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
