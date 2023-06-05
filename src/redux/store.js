import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import customerReducer from "../redux/customers/customerSlice";
import documentReducer from "../redux/documents/documentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    document: documentReducer,
  },
});
