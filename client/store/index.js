import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer/index.js";
import thunk from "redux-thunk";

//store with thunk and dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk)))

export default store;