import userReducer from "./userReducer";
import accountReducer from "./accountReducer"

import { combineReducers } from "redux"; 

const mainReducers = combineReducers({
    users: userReducer,
    account : accountReducer,
  });
  
  export default mainReducers;