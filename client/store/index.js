import { createStore, applyMiddleware, compose } from "redux";
import mainReducers from "./reducer/mainReducer";
import thunk from "redux-thunk";

//store with thunk and dev tools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  mainReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
