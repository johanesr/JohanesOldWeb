import React, { Component } from 'react';
import { bool } from 'prop-types';

class Home extends Component {
  static propTypes = {
    isMobile: bool
  };

  render() {
    return (
      <p>Test Home component</p>
    )
  }
}

export default Home;