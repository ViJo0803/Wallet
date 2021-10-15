import userReducer from "./userReducer";
import accountReducer from "./accountReducer";
import transfersReducer from "./tranferReducer";

import { combineReducers } from "redux";

const mainReducers = combineReducers({
  user: userReducer,
  account: accountReducer,
  transfer: transfersReducer,
});

export default mainReducers;
