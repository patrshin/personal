import React, { Component } from 'react';
import MainMenuBar from './MainMenuBar'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MainMenuBar/>
    );
  }
}

export default App;
