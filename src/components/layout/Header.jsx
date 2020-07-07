import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import routes from "./routes";
import menus from "./menus";

function Header() {
  function showContentMenus(routes) {
    // console.log(routes);
    let result1 = null;

    if (routes.length > 0) {
      result1 = routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.main}
          />
        );
      });
    }
    return result1;
  }
  function showMenus(menus) {
    // console.log(menus);
    let result2 = null;

    if (menus.length > 0) {
      result2 = menus.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <NavLink
              exact
              className="nav-link"
              activeClassName="activeLink"
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>
        );
      });
    }
    return result2;
  }

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
            {showMenus(menus)}
          </ul>
        </div>
      </nav>
      <Switch>{showContentMenus(routes)}</Switch>
    </Router>
  );
}

export default Header;
