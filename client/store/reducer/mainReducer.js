import userReducer from "./userReducer";
import accountReducer from "./accountReducer"
import operationReducer from "./operationReducer";

import { combineReducers } from "redux"; 

const mainReducers = combineReducers({
    users: userReducer,
    account : accountReducer,
    operations: operationReducer
  });
  
  export default mainReducers;