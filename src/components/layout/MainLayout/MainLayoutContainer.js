import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getDevice, setWidth } from '../../../redux/deviceRedux';

const mapStateToProps = state => ({
  device: getDevice(state),
});

const mapDispatchToProps = dispatch => ({
  setWidth: window => dispatch(setWidth(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
