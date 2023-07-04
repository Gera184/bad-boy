import { createSlice } from "@reduxjs/toolkit";

//async actions not allowed instead use inside the actions

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userData(state, action) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
