import { createSlice } from "@reduxjs/toolkit";
import hebrew from "../../jsons/HebrewLanguageSpec.json";
import arabic from "../../jsons/ArabicLanguageSpec.json";

const langReducer = createSlice({
  name: "lang",
  initialState: {
    lang: "hebrew",
    texts: hebrew,
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
      if (action.payload === "arabic") {
        state.texts = arabic;
      } else {
        state.texts = hebrew;
      }
    },
  },
});

export const langActions = langReducer.actions;

export default langReducer.reducer;
