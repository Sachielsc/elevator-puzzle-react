/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Challenge from './Components/RefactorMeComponents/Challenge';
import {Route} from 'react-router-dom';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Main />

      </div>
    );
  }
}

export default App;
