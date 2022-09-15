import { combineReducers } from "@reduxjs/toolkit";
import type { AnyAction, CombinedState } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import counter from "./counter";

type ReducerState = {
  counter: { count: number };
};

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    // SSR작업 수행시 HYDRATE를 통해 server store -> client store로 스토어를 합쳐줌
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
  })(state, action);
};

export default rootReducer;
