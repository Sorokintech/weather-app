import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: [],
  cityInfo: [],
};

const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    addCityInfo: (state, action) => {
      console.log(action.payload);
      const cityData = action.payload;
      const dataArray = [];
      const {
        cloudcover,
        humidity,
        utc_offset,
        wind_speed,
        pressure,
        uv_index,
        visibility,
      } = cityData;
      dataArray.push(
        { key: "Cloud Cover", value: `${cloudcover}%`, icon: "cloudcover" },
        { key: "Humidity", value: `${humidity}%`, icon: "humidity" },
        { key: "UTC Offset", value: `+${utc_offset} GMT`, icon: "utc_offset" },
        { key: "Wind Speed", value: `${wind_speed} m/s`, icon: "wind_speed" },
        { key: "Pressure", value: `${pressure} mm`, icon: "pressure" },
        { key: "UV Index", value: uv_index, icon: "uv_index" },
        { key: "Visibility", value: `${visibility} km`, icon: "visibility" }
      );
      console.log(dataArray);
      state.cityInfo = dataArray;
      console.log(state.cityInfo);
    },
  },
});

export const { addWeatherData, addCityInfo } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
