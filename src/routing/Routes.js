import React from "react";
import { Route, Switch } from "react-router-dom";
import Protected from "./Protected";
import Login from "../components/Login";

import Register from "../components/Register";
import Dashboard from "../components/dashboard/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={Register} />
      <Protected exact path="/" component={Dashboard} />
    </Switch>
  );
};
