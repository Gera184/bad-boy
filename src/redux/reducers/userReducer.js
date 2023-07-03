import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
