import React, { Component } from 'react';
import { bool } from 'prop-types';

class NotFound extends Component {
  static propTypes = {
    isMobile: bool
  };

  componentDidMount() {
    console.log(global.isMobile);
  }

  render() {
    return (
      <p>Test NotFound component</p>
    )
  }
}

export default NotFound;