import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Login from '../src/components/Login/index';
import Signup from '../src/components/Signup/index';
import Home from '../src/pages/Home';
import NotFound from '../src/components/NotFound';
import Search from '../src/pages/Search';
import Profile from "../src/pages/Profile";
import Saved from "../src/pages/Saved";

export default class App extends Component {
  render() {
    // JSX
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="*" component={NotFound} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>

    );
  }
}