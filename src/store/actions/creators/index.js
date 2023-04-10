import { ADD_CITY_INFO } from "../types";


export const addCity = (city, country, temperature, description, humidity, time, cloudcover, wind, pressure, icon) => ({
    type: ADD_CITY_INFO,
    payload: {
        city, country, temperature, description, humidity, time, cloudcover, wind, pressure, icon
    }
})
