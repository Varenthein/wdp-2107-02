import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  setCompare,
  getCount,
  getCompareState,
  setCompareState,
} from '../../../redux/compareRedux';
import {
  isFavourite,
  addFavourite,
  removeFavourite,
} from '../../../redux/favouritesRedux';

const mapStateToProps = (state, { id }) => ({
  compareCount: getCount(state),
  compare: getCompareState(state),
  isFavourite: isFavourite(state, id),
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  setCompareState: value => dispatch(setCompareState(value)),
  addFavourite: id => dispatch(addFavourite(id)),
  removeFavourite: id => dispatch(removeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
