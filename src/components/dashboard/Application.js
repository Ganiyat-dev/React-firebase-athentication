import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";

import Dashboard from "./Dashboard";
import { UserContext } from "../../Context";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <Dashboard />
  ) : (
    <Router>
      <Register path="sign-up" />
      <Login path="/" />
    </Router>
  );
}

export default Application;
