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
        precip,
      } = cityData;
      dataArray.push(
        { title: "Cloud Cover", value: `${cloudcover}%`, icon: "cloudcover" },
        { title: "Precipitation", value: `${precip}%`, icon: "precipitation" },
        { title: "Humidity", value: `${humidity}%`, icon: "humidity" },
        {
          title: "UTC Offset",
          value: `+${utc_offset} GMT`,
          icon: "utc_offset",
        },
        { title: "Wind Speed", value: `${wind_speed} m/s`, icon: "wind_speed" },
        { title: "Pressure", value: `${pressure} mm`, icon: "pressure" },
        { title: "UV Index", value: uv_index, icon: "uv_index" },
        { title: "Visibility", value: `${visibility} km`, icon: "visibility" }
      );

      state.cityInfo = dataArray;
    },
  },
});

export const { addWeatherData, addCityInfo } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
