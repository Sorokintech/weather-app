// slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: [],
};

const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { addWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
