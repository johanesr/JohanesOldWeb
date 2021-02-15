import React, { Component } from 'react';
import { bool } from 'prop-types';

import './styles.scss';

class NotFound extends Component {
  static propTypes = {
    isMobile: bool
  };

  componentDidMount() {
    console.log(global.isMobile);
  }

  render() {
    return (
      <div className="not-found-wrapper">
        <div>Page does not exist</div>
        <a href="/">Go back to home page?</a>
      </div>
    )
  }
}

export default NotFound;