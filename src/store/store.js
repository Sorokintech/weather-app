import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducers";
import { dataReducer } from "./reducers/dataReducer";

const rootReducer = combineReducers({
    currentCity: cityReducer,
    dataPresent: dataReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;