import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "./modules";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
  });

  return store;
};

export const wrapper = createWrapper(createStore, {
  debug: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
