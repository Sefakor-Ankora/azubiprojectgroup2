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
import Cards from './components/Login/Cards';







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
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
