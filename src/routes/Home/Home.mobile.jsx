import React, { Component } from 'react';
import Header from '../../components/Header';

class HomeMobile extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="home-wrapper">
          <div className="home-header">
            <Header />
            <div>
              {`I am a <Web Developer/>`}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMobile;