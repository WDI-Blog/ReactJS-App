import React from "react";
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

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/app1",
    exact: true,
    main: () => <App1 />,
  },
  {
    path: "/app2",
    exact: true,
    main: () => <App2 />,
  },
  {
    path: "/app3",
    exact: true,
    main: () => <App3 />,
  },
  {
    path: "/app4",
    exact: true,
    main: () => <App4 />,
  },
  {
    path: "/app5",
    exact: true,
    main: () => <App5 />,
  },
  {
    path: "/app6",
    exact: true,
    main: () => <App6 />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
