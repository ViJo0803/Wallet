import userReducer from "./userReducer";
import accountReducer from "./accountReducer"
import operationReducer from "./operationReducer";
import contactsReducer from "./contactsReducer";

import { combineReducers } from "redux"; 

const mainReducers = combineReducers({
    users: userReducer,
    account : accountReducer,
    operations: operationReducer,
    contacts:contactsReducer
  });
  
  export default mainReducers;