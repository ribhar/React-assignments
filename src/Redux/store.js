// create store here

import { legacy_createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = legacy_createStore(reducer, enhancer);

if (window.Cypress) {
  window.store = store;
}
