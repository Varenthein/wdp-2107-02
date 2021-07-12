import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setCompare, getCount, getCompareState, setCompareState } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compareCount: getCount(state),
  compare: getCompareState(state),
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  setCompareState: value => dispatch(setCompareState(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
