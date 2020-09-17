import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import auth from "./Firebase";
import Login from "./components/Login";

import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import { Provider } from "./context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser.displayName);
        // console.log(authUser.displayName);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const handleSubmit = () => {
    auth.SignOut();
    return <Redirect to="/sign-in" />;
  };

  return (
    <Provider>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Vennit
              </Link>
              <div className="collapse navbar-collapse ">
                <ul className="navbar-nav ml-auto">
                  {!user && (
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>
                        Login
                      </Link>
                    </li>
                  )}
                  {!user && (
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>
                        Register
                      </Link>
                    </li>
                  )}

                  {user && (
                    <button onClick={handleSubmit} className="btn btn-primary">
                      Logout
                    </button>
                  )}
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* <Route path="/" component={Login} /> */}
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={Register} />
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
