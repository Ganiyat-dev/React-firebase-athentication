import React, { createContext, useReducer, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGGED_OUT } from "../Types";
import authReducer from "./AuthReducer";
import auth from "../../Firebase";
import { ToastContainer, toast } from 'react-toastify';


export const authContext = createContext();



const { Provider } = authContext;
const AuthState = ({ children }) => {

  const history = useHistory();
  const initialState = { user: null, isLoggedin: false };
  const [state, dispatch] = useReducer(authReducer, initialState);
  
 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: AUTH_USER,
          payload: { user: user.displayName, isLoggedin: true },
        });
      // console.log(auth.currentUser);
  
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const register = async (email, password, FirstName, LastName) => {
    try {
      const regUser = await auth.createUserWithEmailAndPassword( email, password)
      
      await regUser.user.updateProfile({
        displayName: `${FirstName} ${LastName}`,
      });
  
       auth.currentUser.sendEmailVerification().then((currentUser) => {
          console.log("email verification sent.");
          if (auth.currentUser.emailVerified) {
             dispatch({
        type: REGISTER_USER,
        payload: { user: regUser.user.displayName, isLoggedin: true },
      });  
        } else {
          toast.warn( 'Please verify your email to continue');
        }
      })
    } catch (error) {
      console.error(error.message);
      if (error.code === "auth/email-already-in-use") {
       toast.warn((error.message) , {position: toast.POSITION.TOP_CENTER, autoClose: false});
      } else {
      toast.error("Something went wrong, please try again", {position: toast.POSITION.TOP_CENTER, autoClose: false});
      }
      
    }
  };
  const login = async (email, password) => {
    try {
      const regUser = await auth.signInWithEmailAndPassword(email, password).then((currentUser) => {
          console.log(auth.currentUser.emailVerified);
          if (auth.currentUser.emailVerified) {
             dispatch({
                    type: LOGIN_USER,
                    payload: { user: regUser.user.displayName, isLoggedin: true },
                  }); 
                  return history?.push("/")
           } else {
          toast.warn( 'Please verify your email to continue');
          }
      });
          // console.log(auth.currentUser);
          
    } catch (error) {
      console.error(error)
      if (error.code === "auth/user-not-found") {
       toast.error(("Invalid login Credentials") , {position: toast.POSITION.TOP_CENTER, autoClose: false});
      } 
    }
  };
  const logOut = () => {
    dispatch({ type: LOGGED_OUT });
  };

  return (
    <>
    <ToastContainer />
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
    </>
  );
};
export default AuthState;
