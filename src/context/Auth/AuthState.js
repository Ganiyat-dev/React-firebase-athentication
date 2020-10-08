import React, { createContext, useReducer } from "react";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../Types";
import authReducer from "./AuthReducer";
import auth from "../../Firebase";
export const authContext = createContext();

const { Provider } = authContext;
const AuthState = ({ children }) => {
  const initialState = { user: null };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const register = async (email, password, FirstName, LastName) => {
    try {
      const regUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(email);
      await regUser.user.updateProfile({
        displayName: `${FirstName} ${LastName}`,
      });
      dispatch({ type: REGISTER_USER, payload: regUser });
    } catch (error) {
      alert(error.message);
    }
  };
  const login = async (email, password) => {
    try {
      const regUser = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: LOGIN_USER, payload: regUser });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Provider value={{ user: state.user, register, login }}>
      {children}
    </Provider>
  );
};
export default AuthState;
