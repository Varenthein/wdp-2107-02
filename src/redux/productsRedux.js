/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getLimitedProducts = ({ products }, limit) => {
  products.slice(0, limit);
};

export const sortAscByParam = ({ products }, param) =>
  products.sort((a, b) => a[param] > b[param]);

export const sortDescByParam = ({ products }, param) =>
  products.sort((a, b) => b[param] < a[param]);

/* functions */

const addMyRating = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }
    return {
      ...currentStateElement,
      myRating: action.payload.myRating,
    };
  });
};

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAV = createActionName('SET_FAV');
const ADD_RATING = createActionName('ADD_RATING');

/* action creators */
export const setFavorite = payload => ({ payload, type: SET_FAV });
export const addRating = payload => ({ payload, type: ADD_RATING });

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_FAV: {
      let products = statePart.map(item => {
        if (item.id === action.payload) {
          item.favorite = !item.favorite;
        }
        return item;
      });
      return [...statePart, products];
    }
    case ADD_RATING: {
      return addMyRating(statePart, action);
    }
    default:
      return statePart;
  }
}
