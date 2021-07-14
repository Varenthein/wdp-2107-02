import { connect } from 'react-redux';
import ProductsCompare from './ProductsCompare';
import { removeCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  removeCompare: value => dispatch(removeCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
