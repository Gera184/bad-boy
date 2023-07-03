import { createSlice } from "@reduxjs/toolkit";

//async actions not allowed instead use inside the actions

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
