import React, { useContext } from "react";
// import auth from "../Firebase";
import { authContext } from "../context/Auth/AuthState";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, ...rest }) => {
  const globalUser = useContext(authContext);
  const { isLoggedin } = globalUser;
  // console.log(isLoggedin);

  return (
    <Route
      {...rest}
      render={(props) =>
        !!isLoggedin ? (<Component {...props} />) : (<Redirect to="/sign-in" />)
      }
    />
  );
};
export default Protected;
