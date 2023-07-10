import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import langReducer from "./reducers/langReducer";
import citiesReducer from "./reducers/citiesReducer";
import banksReducer from "./reducers/banksReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    language: langReducer,
    citiesData: citiesReducer,
    banks: banksReducer,
  },
});

export default store;
