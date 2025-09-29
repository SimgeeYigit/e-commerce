import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { thunk } from 'redux-thunk';
import reducers from "./reducers";

export const store = createStore(reducers, applyMiddleware(thunk, logger));