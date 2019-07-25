import React, { Component } from 'react';
import Header from '../../components/Header';

import './styles.scss';

class HomeDesktop extends Component {

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-header">
          <Header />
          <div>
          {`I am a <Web Developer/>`}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeDesktop;