import React, { Component } from 'react';
import Header from '../../components/Header';

import ProfileImage from '../../styles/assets/Johanes.jpg';
import GithubImage from '../../styles/assets/GitHub-Logo.png';
import CVImage from '../../styles/assets/CV_Logo.png';

import MyCV from '../../styles/assets/JohanesRonaldo_CV.pdf';

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
              <a href="/">
                <div className="content-desc">
                  <span className="text-center">Profile</span>
                  <img className="content-image" src={ProfileImage} alt="Johanes"/>
                </div>
              </a>
            </div>
            <div className="col home-profile">
              <span className="content-desc"><a href="/">Find out more about me!</a></span>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="row">
            <div className="col home-github">
              <span className="content-desc"><a href="https://github.com/johanesr">Visit my Github Page!</a></span>
            </div>
            <div className="col">
              <a href="https://github.com/johanesr">
                <div className="content-desc">
                  <span className="text-center">GitHub</span>
                  <img className="content-image" src={GithubImage} alt="Johanes"/>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="row">
            <div className="col">
              <a href={MyCV} download>
                <div className="content-desc">
                  <span className="text-center">CV</span>
                  <img className="cv-image" src={CVImage} alt="Johanes"/>
                </div>
              </a>
            </div>
            <div className="col home-cv">
              <span className="content-desc"><a href={MyCV} download>Download my CV!</a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeDesktop;