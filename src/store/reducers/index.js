import { ADD_CITY_INFO } from "../actions/types/index";

const initialState = {
    cityInfo: {
        city: 'New York', 
        country:'United Kingdom',
        temperature:9,
        description:['Partly cloudy'],
        humidity: 62,
        time: '01:52 PM',
        cloudcover:50,
        wind:19,
        pressure:1028,
        icon:['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png']
    }
};

export const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CITY_INFO': {
            return {...state, 
            cityInfo: action.payload
            }
        }
        default: 
        return state;
    }
        
}
