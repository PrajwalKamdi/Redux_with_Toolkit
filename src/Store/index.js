import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    Increment: (state) => {
      return (state = state + 1);
    },
    Decrement: (state) => {
      return (state = state - 1);
    },
    add: (state, action) => {
      return (state = state + Number(action.payload));
    },
    Substarct: (state, action) => {
      return (state = state - Number(action.payload));
    },
  },
});

const displaySlice = createSlice({
  name: "display",
  initialState: false,
  reducers: {
    setDisplay: (state) => {
      return state = !state;
    },
  },
});
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    display: displaySlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const displayActions = displaySlice.actions;

export default counterStore;
