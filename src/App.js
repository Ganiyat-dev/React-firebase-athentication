import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import auth from "./Firebase";
import Protected from "./routing/Protected";
import Login from "./components/Login";

import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";

// import { Provider } from "./context";

const App = () => {
  let history = useHistory();
  const [user] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        history.push("/");
        // console.log(authUser.displayName);
      } else {
        history.push("/sign-in");
      }
    });
  });

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Protected user={user} path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
