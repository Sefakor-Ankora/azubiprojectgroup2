import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";
  import  Signin  from './components/Login/Signin';
  import  Signup  from './components/Login/Signup';

import Landing from './components/Landing/Landing';
import Details from './components/Details/Details';
import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Cards/Cards';







export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Signin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
