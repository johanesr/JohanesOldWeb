import React, { PureComponent } from 'react';
import '../../styles/index.scss';
import './styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-name text-left">
          <span>JR</span>
        </div>
      </div>
    )
  }
}

export default Header;