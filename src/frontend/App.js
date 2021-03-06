import React, { Component } from 'react';
import './App.css';
import Gallery from '../frontend/Components/Gallery/Gallery';
import HomePage from '../frontend/Components/HomePage/HomePage';
import { withRouter, Route, Switch } from "react-router-dom";
import NavBar from '../frontend/Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/explore' component={Gallery} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
