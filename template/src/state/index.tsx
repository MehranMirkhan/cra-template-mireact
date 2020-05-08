import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Reducers
import metaReducer, { initialState as metaInit } from "./meta";
import authReducer, { initialState as authInit } from "./auth";
import usersReducer, { initialState as usersInit } from "./users";

// Sagas
import sagas from "./sagas";

const reducer = combineReducers({
  meta: metaReducer,
  auth: authReducer,
  users: usersReducer,
});

export const initialState: AppState = {
  meta: { ...metaInit },
  auth: { ...authInit },
  users: { ...usersInit },
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(sagas);

export default function ({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
