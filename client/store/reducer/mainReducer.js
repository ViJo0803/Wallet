import userReducer from "./userReducer";
import accountReducer from "./accountReducer";
import operationsReducer from "./operationsReducer";

import { combineReducers } from "redux";

const mainReducers = combineReducers({
  users: userReducer,
  account: accountReducer,
  operations: operationsReducer
});

export default mainReducers;
