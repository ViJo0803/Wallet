import userReducer from "./userReducer";
import accountReducer from "./accountReducer";
import transfersReducer from "./tranferReducer";
import contactsReducer from "./contactsReducer";

import { combineReducers } from "redux";

const mainReducers = combineReducers({
  user: userReducer,
  account: accountReducer,
  transfer: transfersReducer,
  contacts: contactsReducer,
});

export default mainReducers;
