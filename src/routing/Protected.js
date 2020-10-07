import React, { useEffect, useState } from "react";
import auth from "../Firebase";

import { Route, Redirect } from "react-router-dom";

function Protected(props) {
  // = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(true);
        console.log(user);
      } else {
        setUser(false);
      }
    });
  });

  // const user = {
  //   isLoggedIn: false,
  //   onAuthentication() {
  //     this.isLoggedIn = true;
  //   },
  //   getLogInStatus() {
  //     return this.isLoggedIn;
  //   },
  // };

  return (
    //   return (
    //     <Route
    //       {...rest}
    //       render={(props) =>
    //         user === true ? <Component {...props} /> : <Redirect to="/sign-in" />
    //       }
    //     />
    <Route
      path={props.path}
      render={(data) =>
        user === true ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

export default Protected;
