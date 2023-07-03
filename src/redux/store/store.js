import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../actions/counter";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})