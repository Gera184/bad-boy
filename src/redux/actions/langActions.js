import { langActions } from "../reducers/langReducer";

export const languageChangeAction = (lang) => {
  return (dispatch) => {
    dispatch(langActions.changeLang(lang));
  };
};
