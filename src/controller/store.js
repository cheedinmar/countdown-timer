import { compose, applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/index";
import middleware from "./middleware";

// dev tool

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const ConfigureStore = (services) =>
  createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(...middleware.map((f) => f(services))))
  );
