import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, incrementValue, decrement } = counterSlice.actions;
export default counterSlice.reducer;
