import { createSlice } from "@reduxjs/toolkit";

//async actions not allowed instead use inside the actions

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    retailerParameters: null,
  },
  reducers: {
    userData(state, action) {
      state.user = action.payload;
    },
    getRetailerParameters(state, action) {
      state.retailerParameters = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
