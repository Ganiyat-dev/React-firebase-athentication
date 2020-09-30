import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "./routing/Routes";

// import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route component={Routes} />
        </Router>
      </>
    );
  }
}

export default App;
