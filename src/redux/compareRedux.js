/* selectors */
export const getCount = ({ compare }) => compare.products.length;
export const getCompareState = ({ compare }) => compare;

/* action name creator */
const createActionName = name => `products/compare/${name}`;

/* action types */
export const SET_COMPARE = createActionName('SET_COMPARE');
export const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');
export const SET_COMPARE_STATE = createActionName('SET_COMPARE_STATE');

/* action creator */
export const setCompare = payload => ({ payload, type: SET_COMPARE });
export const removeCompare = payload => ({ payload, type: REMOVE_COMPARE });
export const setCompareState = payload => ({ payload, type: SET_COMPARE_STATE });

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
    case SET_COMPARE_STATE:  
      return {
        ...statePart,
        compare: [...statePart.compare, action.payload],
      };
    default:
      return statePart;
  }
}
