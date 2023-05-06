const initialState = {
  dataIsPresent: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_PRESENT": {
      return { ...state, dataIsPresent: action.payload };
    }
    default:
      return state;
  }
};
