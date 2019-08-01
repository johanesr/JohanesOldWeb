import React, { Component } from 'react';
import Header from '../../components/Header';

class HomeDesktop extends Component {

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-header">
          <Header />

          <div className="header-desc">
            {`I am a <Web Developer/>`}
          </div>
        </div>

        <div className="home-content">
          <div className="row">
            <div className="col">
              <span className="content-desc">Picture</span>
            </div>
            <div className="col home-profile">
              <span className="content-desc">Description</span>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="row">
            <div className="col home-github">
              <span className="content-desc">Description</span>
            </div>
            <div className="col">
              <span className="content-desc">Picture</span>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="row">
            <div className="col">
              <span className="content-desc">Picture</span>
            </div>
            <div className="col home-cv">
              <span className="content-desc">Description</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeDesktop;