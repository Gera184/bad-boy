import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import customerReducer from "../features/customers/customerSlice";
import documentReducer from "../features/documents/documentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    document: documentReducer,
  },
});
