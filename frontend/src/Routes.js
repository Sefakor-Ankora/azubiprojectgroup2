import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/stepsfrom">Stepforms</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

function Landing() {
  return <h2>Landing</h2>;
}

function Stepforms() {
  return <h2>Stepforms</h2>;
}

function Details() {
  return <h2>Details</h2>;
}
