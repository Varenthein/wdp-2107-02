import { connect } from 'react-redux';
import Gallery from './Gallery';
import {
  getFeatured,
  getTopSeller,
  getSaleOff,
  getTopRated,
} from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  getFeatured: getFeatured(state),
  getTopSeller: getTopSeller(state),
  getSaleOff: getSaleOff(state),
  getTopRated: getTopRated(state),
});

export default connect(mapStateToProps)(Gallery);
