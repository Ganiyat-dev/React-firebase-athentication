import React, { useState, useEffect } from "react";
import auth from "../Firebase";

import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, ...rest }) => {
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

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to="/sign-in" /> : <Component {...props} />
      }
    />
  );
};

export default Protected;
