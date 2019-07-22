import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NotFound from './components/NotFound';
// import Dashboard from './components/Dashboard';
import SearchArtist from './components/Search';
import SearchResults from './components/SearchResults';

export default class App extends Component {


    render() {
      // JSX
      return (
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/search" component={SearchArtist} />
          <Route path="/results" component={SearchResults} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
          
      );
    }
}