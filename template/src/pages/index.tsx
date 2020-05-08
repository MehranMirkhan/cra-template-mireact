import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Home";

import Navbar from "src/gadgets/Navbar";

export function Pages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export function TemplateWithNavbar({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Pages;
