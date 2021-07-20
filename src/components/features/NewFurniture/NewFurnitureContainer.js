import { connect } from 'react-redux';
import NewFurniture from './NewFurniture';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, setFavorite } from '../../../redux/productsRedux.js';
import { addRating } from '../../../redux/productsRedux';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  device: getDevice(state),
});

const mapDispatchToProps = dispatch => ({
  setFav: productId => dispatch(setFavorite(productId)),
  addRating: payload => dispatch(addRating(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
