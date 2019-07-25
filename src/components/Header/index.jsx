import React, { PureComponent } from 'react';
import '../../styles/index.scss';
import './styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-wrapper">
        {/*<div className="container">*/}
          <div className="row">
            <div className="col header-home">
              Home
            </div>
            <div className="col text-center">
              JR
            </div>
            <div className="col header-menu">
              Test
            </div>
          </div>
      </div>
    )
  }
}

export default Header;