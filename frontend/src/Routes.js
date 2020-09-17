import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";
  import  Stepforms  from './components/Stepforms';
import Landing from './components/Login/Landing';
import Details from './components/Login/Details';





export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <Stepforms />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
