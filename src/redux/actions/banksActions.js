import { banksActions } from "../reducers/banksReducer";

export const getBanksAction = (banks) => {
  return (dispatch) => {
    dispatch(banksActions.getBanks(banks));
  };
};
