import { connect } from 'react-redux';
import Feedback from './Feedback';
import { getAllComments } from '../../../redux/commentsRedux';

const mapStateToProps = state => ({
  comments: getAllComments(state),
});

export default connect(mapStateToProps, null)(Feedback);
