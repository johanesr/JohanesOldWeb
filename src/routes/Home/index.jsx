import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import './styles.scss';

import asyncComponent from '../../helpers/asyncComponent';

const DesktopHome = asyncComponent(() =>
  import('./Home.desktop')
    .then(module => module.default)
);

const MobileHome = asyncComponent(() =>
  import('./Home.mobile')
    .then(module => module.default)
);


class Home extends Component {
  static propTypes = {
    isMobile: bool
  };

  render() {
    const { isMobile, ...restProps } = this.props;

    return (isMobile ? <MobileHome {...restProps}/> : <DesktopHome {...restProps}/>)
  }
}

export default connect(state => ({
  isMobile: state.app.display.isMobile
}))(Home);