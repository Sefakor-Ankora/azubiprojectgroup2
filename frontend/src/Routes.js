import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import  Stepforms  from './components/Stepforms';
import Landing from './components/Login/Landing';
import Details from './components/Login/Details';

export default function App() {
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

// function Landing() {
//   return <h2>Landing</h2>;
// }

// function Stepforms() {
//   return <h2>Stepforms</h2>;
// }

// function Details() {
//   return <h2>Details</h2>;
// }
