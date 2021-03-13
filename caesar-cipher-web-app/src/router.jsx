import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import Test from "./components/Test.jsx";

export default function AppRoutes() {
  return (
    //https://reactrouter.com/web/guides/quick-start
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}
