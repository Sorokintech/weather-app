// store.js
import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./slice";

const store = configureStore({
  reducer: weatherDataReducer,
});

export default store;
