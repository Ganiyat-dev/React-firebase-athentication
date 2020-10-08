import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "./component.css";
import AuthState from "./context/Auth/AuthState";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById("root")
);

// serviceWorker.unregister();
