import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import auth from "./Firebase";
import Protected from "./routing/Protected";
import Login from "./components/Login";

import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
// import { authContext } from "./context/Auth/AuthState";

const App = () => {
  // let history = useHistory();
  // const globalUser = useContext(authContext);
  // const { isAuthenticated } = globalUser;

  //
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Register} />
        <Protected path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
