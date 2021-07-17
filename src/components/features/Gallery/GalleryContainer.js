import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getGallery, getActiveItem } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  gallery: getGallery(state),
  getActiveItem: getActiveItem(state),
});

export default connect(mapStateToProps)(Gallery);
