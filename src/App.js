import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent{
  state = {
    isMobile: false
  };

  componentDidMount() {
    //Determine if the App is mobile or web
    this.setState({
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    });
  }

  render() {
    const {isMobile} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {!isMobile ? "Web Display" : "Mobile Display"}
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
