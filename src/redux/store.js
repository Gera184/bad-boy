import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import langReducer from "./reducers/langReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    language: langReducer,
  },
});

export default store;
