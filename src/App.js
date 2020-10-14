import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Protected from "./routing/Protected";
import Login from "./components/Login";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";


const App = () => {
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
