import React, { PureComponent } from 'react';
import '../../styles/index.scss';
import './styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-wrapper">
        <div className="row">
          <div className="col header-home">
            <span>Home</span>
          </div>
          <div className="col header-name text-center">
            <span>Johanes Ronaldo</span>
          </div>
          <div className="col header-menu">
            <span>Test</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;