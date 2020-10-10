import React, { createContext, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGGED_OUT } from "../Types";
import authReducer from "./AuthReducer";
import auth from "../../Firebase";
export const authContext = createContext();

const { Provider } = authContext;

const AuthState = ({ children }) => {
  const history = useHistory();
  const initialState = { user: null, isLoggedin: false };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser.displayName);
      if (authUser) {
        dispatch({
          type: AUTH_USER,
          payload: { user: authUser.displayName, isLoggedin: true },
        });
        return history?.push("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const register = async (email, password, FirstName, LastName) => {
    try {
      const regUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await regUser.user.updateProfile({
        displayName: `${FirstName} ${LastName}`,
      });
      // console.log(regUser.user.displayName);
      dispatch({
        type: REGISTER_USER,
        payload: { user: regUser.user.displayName, isLoggedin: true },
      });
      return history?.push("/");
    } catch (error) {
      console.error(error);
      // if (error.code === "auth/email-already-in-use") {
      // return response.status(400).json({ email: "Email already in use" });
      // } else {
      // return response
      // .status(500)
      // .json({ general: "Something went wrong, please try again" });
      // }

      // alert(error.message);
    }
  };
  const login = async (email, password) => {
    try {
      const regUser = await auth.signInWithEmailAndPassword(email, password);

      // console.log(regUser.user.displayName);
      dispatch({
        type: LOGIN_USER,
        payload: { user: regUser.user.displayName, isLoggedin: true },
      });
      return history?.push("/");
    } catch (error) {
      alert(error.message);
      // console.error(error);
      //  return response
      //    .status(403)
      //    .json({ general: "wrong credentials, please try again" });
    }
  };
  const logOut = () => {
    dispatch({ type: LOGGED_OUT });
  };

  return (
    <Provider
      value={{
        user: state.user,
        register,
        login,
        logOut,
        isLoggedin: state.isLoggedin,
      }}
    >
      {children}
    </Provider>
  );
};
export default AuthState;
