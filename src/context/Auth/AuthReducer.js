import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../Types";

function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, user: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export default AuthReducer;
