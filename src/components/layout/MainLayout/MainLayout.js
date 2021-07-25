import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function get_window_width() {
  let window_width = document.documentElement.clientWidth;
  return window_width;
}

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    setWidth: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.props.setWidth(get_window_width());
    window.addEventListener('resize', () => this.props.setWidth(get_window_width()));
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header /> {children} <Footer />
      </div>
    );
  }
}

export default MainLayout;
