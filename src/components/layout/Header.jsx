import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./../Home";
import About from "./../About";
import Contact from "./../Contact";
import App1 from "./../App1/App1";
import App2 from "./../App2";
import App3 from "./../App3";
import App4 from "./../App4";
import App5 from "./../App5";
import App6 from "./../App6";
import "./../../App.css";
import NotFound from "./../NotFound";

function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ReactJS
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                exact
                className="nav-link"
                activeStyle={{ color: "red" }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app1"
              >
                App1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app2"
              >
                App2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app3"
              >
                App3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app4"
              >
                App4
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app5"
              >
                App5
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="activeLink"
                to="/app6"
              >
                App6
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/app1" component={App1} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/app3" component={App3} />
        <Route exact path="/app4" component={App4} />
        <Route exact path="/app5" component={App5} />
        <Route exact path="/app6" component={App6} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Header;
