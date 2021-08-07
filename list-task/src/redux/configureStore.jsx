import { createLogger } from "redux-logger/src";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authorization from "./reducers/authorization";
import list from "./reducers/list";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = combineReducers({
  authorization,
  list
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
