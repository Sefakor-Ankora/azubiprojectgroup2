import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";
  import  Stepforms  from './components/Stepforms';
import Landing from './components/Login/Landing';
import Details from './components/Login/Details';
import Dashboard from './components/Login/Dashboard';
import Eventlisting from './components/Login/Eventlisting';







export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signin">
            <Stepforms />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/eventlisting">
            <Eventlisting />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
