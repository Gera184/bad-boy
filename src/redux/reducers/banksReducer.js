import { createSlice } from "@reduxjs/toolkit";

//async actions not allowed instead use inside the actions

const banksReducer = createSlice({
  name: "banks",
  initialState: {
    banks: null,
    branches: null
  },
  reducers: {
    getBanks(state, action) {
      state.banks = action.payload;
    },
    getBranches(state,action){
      state.branches = action.payload;
    }
  },
});

export const banksActions = banksReducer.actions;

export default banksReducer.reducer;
