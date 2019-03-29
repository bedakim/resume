import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hompage from './components/Homepage';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Project />
          <Route exact path="/" component={Hompage} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
