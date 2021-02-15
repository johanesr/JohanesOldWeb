import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import Navbar from './components/Navbar';

import './App.css';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes/index';

class App extends PureComponent{
  static propTypes = {
    isMobile: bool
  };

  render() {
    const { isMobile } = this.props;

    return (
      <div className={isMobile ? "mobile-layout" : "desktop-layout"}>
        <Navbar />
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(state => ({
  isMobile: state.app.display.isMobile
}))(App);