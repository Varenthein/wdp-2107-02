import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setCompare, getCount } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  count: getCount(state),
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
