import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes/index';

class App extends PureComponent{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
          <p>
            Edit <code>src/App.js</code> and save to reload.(Test Rule)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
