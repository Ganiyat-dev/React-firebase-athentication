import { REGISTER_USER, AUTH_USER, LOGGED_OUT } from "../Types";

function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTER_USER:
    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedin: action.payload.isLoggedin,
      };
    case LOGGED_OUT:
      return { ...state, user: null, isLoggedin: false };

    default:
      return state;
  }
}
export default AuthReducer;
