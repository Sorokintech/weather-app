// store.js
import { configureStore } from "@reduxjs/toolkit";
import stringReducer from "./slice";

const store = configureStore({
  reducer: stringReducer,
});

export default store;
