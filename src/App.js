import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import auth from "./Firebase";
import Login from "./components/Login";

import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Router>
            <Switch>
              {/* <Route path="/" component={Login} /> */}
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Register} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
