import React, { Component } from 'react';

import Header from '../../components/Header';

import ExperienceImage from './assets/experience.jpg';
import ProfileImage from './assets/Johanes.jpg';
import AboutMeImage from './assets/about-me.jpg'
import InstagramLogo from './assets/instagram.png';
import LinkedInLogo from './assets/linkedin.png';
import TiketLogo from './assets/tiket.jpeg';
import HypernetLogo from './assets/hypernet.jpg';
import BinusLogo from './assets/binus.png';

import MyCV from './assets/JohanesRonaldo_CV.pdf';


class HomeMobile extends Component {
  state = {
    showExperience: false
  };

  handleExperience() {
    this.setState({
      showExperience: !this.state.showExperience
    });
  };

  render() {
    const {showExperience} = this.state;

    return (
      <div className="home-wrapper">

        <div className="home-header">
          <div className="header-title">
            <div className="text-center">
              Welcome! my name is
            </div>
            <div className="text-center header-name">
              <h1>Johanes Ronaldo</h1>
            </div>
            <div className="header-desc">
              {`I am a <Web Developer/>`}
            </div>
          </div>
        </div>

        <div>

          <Header />

            <div className="home-experience">
              <div className="container">
                <div className="experience-title line-with-text">
                  <span>My Experience</span>
                </div>
                {!showExperience ? (
                  <div className="text-center">
                    <img src={ExperienceImage} className="experience-image" alt="Experience"/>
                  </div>
                ) : (
                  <div>
                    <div className="row experience-content">
                      <div className="col-12 text-center"><img src={TiketLogo} className="experience-image" alt="Tiket.com"/></div>
                      <div className="col-12">
                        <div><h3><a href="https://www.tiket.com">Tiket.com</a></h3></div>
                        <div className="experience-position">Front End Engineer (Intern), Dec 2018 - Jul 2019</div>
                        <div><strong>Jakarta, Indonesia</strong></div>
                        <div>Description</div>
                      </div>
                    </div>

                    <div className="row experience-content">
                      <div className="col-12 text-center"><img src={HypernetLogo} className="experience-image" alt="Hypernet"/></div>
                      <div className="col-12">
                        <div><h3><a href="https://hypernet.co.id/en/">Hypernet</a></h3></div>
                        <div className="experience-position">Software Engineer (Intern), Jul 2017 - Oct 2017</div>
                        <div><strong>Jakarta, Indonesia</strong></div>
                        <div>
                          <ul>
                            <li>Practiced designing CRUD services in a PHP Application hosted on a locally set-up XAMPP server</li>
                            <li>Used Debian operating system hosted in a Virtual Machine to familiarize myself with unix commands.</li>
                            <li>Learned about Mikrotik RouterOS features and used it to create a network topology with specified requirements.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row experience-content">
                      <div className="col-12 text-center"><img src={BinusLogo} className="experience-image" alt="BINUS"/></div>
                      <div className="col-12">
                        <div><h3><a href="https://binus.ac.id/">BINUS International</a></h3></div>
                        <div className="experience-position">Currently Pursuing Computer Science Degree, Earned in 2020</div>
                        <div><strong>Jakarta, Indonesia</strong></div>
                        <div>Description</div>
                      </div>
                    </div>
                  </div>
                )}
                <div className=" text-center experience-show" onClick={this.handleExperience.bind(this)}>{!showExperience ? "Show Experiences" : "Remove Experiences"}</div>
                <div className="text-center cv-download">
                  <span>Click <a href={MyCV} download>Here</a> to Download My CV!</span>
                </div>
              </div>
            </div>

          {/*Add later on when Blog is done*/}

          {/*<div className="home-about">*/}
            {/*<div className="text-center"><img src={ProfileImage} className="profile-image" alt="Johanes"/></div>*/}

            {/*<div className="about-title line-with-text">*/}
              {/*<span>Find Out More About Me!</span>*/}
            {/*</div>*/}

            {/*<div className="text-center">*/}
              {/*<img src={AboutMeImage} className="about-image" alt="About"/>*/}
            {/*</div>*/}
          {/*</div>*/}

          <div className="home-contact">
            <div className="text-center"><img src={ProfileImage} className="profile-image" alt="Johanes"/></div>
            <div className="contact-title">
              <div>I’m a Student From Indonesia</div>
              <div>with a dream of being an entrepeneur</div>
            </div>
            <div>Get in touch with me!</div>
            <div className="row contact-social-media">
              <div className="col-12 text-center"><a href="https://www.instagram.com/ronaldo97/"><img src={InstagramLogo} className="contact-image" alt="Instagram"/></a></div>
              <div className="col-12 text-center"><a href="https://www.linkedin.com/in/johanes-ronaldo-124866142/"><img src={LinkedInLogo} className="contact-image" alt="LinkedIn"/></a></div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default HomeMobile;