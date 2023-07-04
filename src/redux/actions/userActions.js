import { userActions } from "../reducers/userReducer";

export const loginAction = (data) => {
  return (dispatch) => {
    dispatch(userActions.userData(data));
  };
};
