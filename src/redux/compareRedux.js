/* selectors */
export const getCount = ({ compare }) => compare.products.length;

/* action name creator */
const createActionName = name => `products/compare/${name}`;

/* action types */
export const SET_COMPARE = createActionName('SET_COMPARE');
export const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creator */
export const setCompare = payload => ({ payload, type: SET_COMPARE });
export const removeCompare = payload => ({ payload, type: REMOVE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_COMPARE:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    case REMOVE_COMPARE:
      return {
        ...statePart,
        products: statePart.products.filter(prod => prod.id !== action.payload),
      };
    default:
      return statePart;
  }
}
