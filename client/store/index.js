import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./reducer/user";
import thunk from "redux-thunk";

//store with thunk and dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(
        userReducer,
        composeEnhancers(applyMiddleware(thunk)))

export default store;