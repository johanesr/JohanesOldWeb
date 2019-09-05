import React, { Component } from 'react';

import ProfileImage from './assets/Johanes.jpg';
import TiketLogo from './assets/tiket.jpeg';
import HypernetLogo from './assets/hypernet.jpg';
import BinusLogo from './assets/binus.png';
import InstagramLogo from './assets/instagram.png';
import LinkedInLogo from './assets/linkedin.png';

import MyCV from './assets/JohanesRonaldo_CV.pdf';

class HomeDesktop extends Component {
  state = {
    experienceContent: [
      {image: TiketLogo, name: 'Tiket.com', link: 'https://www.tiket.com', position: 'Front End Engineer (Intern), Dec 2018 - Jul 2019', location: 'Jakarta, Indonesia', description: 'Description'},
      {image: HypernetLogo, name: 'Hypernet', link: 'https://hypernet.co.id/en/', position: 'Software Engineer (Intern), Jul 2017 - Oct 2017', location: 'Jakarta, Indonesia', description: 'Description'},
      {image: BinusLogo, name: 'BINUS International', link: 'https://binus.ac.id/', position: 'Currently Pursuing Computer Science Degree, Earned in 2020', location: 'Jakarta, Indonesia', description: 'Description'}
    ]
  };

  render() {
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


        <div className="home-experience">
          <div className="container">
            <div className="experience-title line-with-text">
              <span>My Experience</span>
            </div>

            <div className="row experience-content">
              <div className="col-6 text-center"><img src={TiketLogo} className="experience-image" alt="Tiket.com"/></div>
              <div className="col-6">
                <div><h3><a href="https://www.tiket.com">Tiket.com</a></h3></div>
                <div className="experience-position">Front End Engineer (Intern), Dec 2018 - Jul 2019</div>
                <div><strong>Jakarta, Indonesia</strong></div>
                <div>Work alongside other full-time front end engineers to build the front-end implementation of the membership platform using <strong>React and Redux</strong> under the direct guideline of the principal front-end engineer.</div>
                <div>
                  <ul>
                    <li>Complete the new UI for Tiket.com’s login, logout, signup, forgot-password, OTP (One Time Password), Security Settings and change-password page</li>
                    <li>Integrate the front-end to the backend using GraphQL.</li>
                    <li>Uses Jest and Enzyme as the JavaScript testing utility</li>
                    <li>Uses SonarQube to reviews and analyzes code by detecting bugs, code smells and security vulnerabilities</li>
                    <li>Learned to use Slack as a communication channel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row experience-content">
              <div className="col-6 text-center"><img src={HypernetLogo} className="experience-image" alt="Hypernet"/></div>
              <div className="col-6">
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
              <div className="col-6 text-center"><img src={BinusLogo} className="experience-image" alt="BINUS"/></div>
              <div className="col-6">
                <div><h3><a href="https://binus.ac.id/">BINUS International</a></h3></div>
                <div className="experience-position">Currently Pursuing Computer Science Degree, Earned in 2020</div>
                <div><strong>Jakarta, Indonesia</strong></div>
                <div>
                  <ul>
                    <li>Becomes BINUS STAR (Student Transnational Ambassador) student by joining the student exchange program and earned a GKS Scholarship in Korea</li>
                    <li>Currently holds a 3.59/4.00 GPA</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center cv-download">
              <span>Click <a href={MyCV} download>Here</a> to Download My CV!</span><br/>
              <span>&</span><br/>
              <span>Check my <a href="https://github.com/johanesr">Github Repository</a>!</span>
            </div>
          </div>
        </div>

        {/*Add later on when Blog is done*/}

        {/*<div className="home-about">*/}
          {/*<div className="text-center"><img src={ProfileImage} className="profile-image" alt="Johanes"/></div>*/}
          {/*<div className="about-title line-with-text">*/}
            {/*<span>Find Out More About Me!</span>*/}
          {/*</div>*/}
          {/*<div className="container">*/}
            {/*<div className="row">*/}
              {/*<div className="col about-square">Gaming</div>*/}
              {/*<div className="col about-square">Traveling</div>*/}
              {/*<div className="col about-square">Food</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className="home-contact">
          <div className="text-center"><img src={ProfileImage} className="profile-image" alt="Johanes"/></div>
          <div className="contact-title line-with-text">
            <div><strong>I’m a Student From Indonesia</strong></div>
            <div><strong>with a dream of being an entrepeneur</strong></div>
          </div>
          <div>Get in touch with me. <a href="https://www.linkedin.com/in/johanes-ronaldo-124866142/">LinkedIn</a> or <a href="https://www.instagram.com/ronaldo97/">Instagram</a> messages work best!</div>
          <div className="row contact-social-media">
            <div className="col text-right"><a href="https://www.instagram.com/ronaldo97/"><img src={InstagramLogo} className="contact-image" alt="Instagram"/></a></div>
            <div className="col text-left"><a href="https://www.linkedin.com/in/johanes-ronaldo-124866142/"><img src={LinkedInLogo} className="contact-image" alt="LinkedIn"/></a></div>
          </div>
        </div>


      </div>
    )
  }
}

export default HomeDesktop;