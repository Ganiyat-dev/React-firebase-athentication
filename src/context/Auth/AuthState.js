import React, {createContext, useReducer} from "react";
import {LOGGIN_USER, REGISTER_USER, AUTH_USER} from "../Types";

export const authContext = createContext();
const {Provider} = authContext();
