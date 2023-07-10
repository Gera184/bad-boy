import { createSlice } from "@reduxjs/toolkit";

//async actions not allowed instead use inside the actions

const citiesReducer = createSlice({
  name: "cities",
  initialState: {
    cities: null,
    streets: null,
  },
  reducers: {
    getCities(state, action) {
      state.cities = action.payload;
    },
    getStreets(state, action) {
      state.streets = action.payload;
    },
  },
});

export const citiesActions = citiesReducer.actions;

export default citiesReducer.reducer;
