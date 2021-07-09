/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

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
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_RATING = createActionName('ADD_RATING');

/* action creators */
export const addRating = payload => ({ payload, type: ADD_RATING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_RATING: {
      return addMyRating(statePart, action);
    }
    default:
      return statePart;
  }
}
