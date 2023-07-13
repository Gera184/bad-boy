import { banksActions } from "../reducers/banksReducer";

export const getBanksAction = (banks) => {
  return (dispatch) => {
    dispatch(banksActions.getBanks(banks));
  };
};

export const getBranchesAction = (Bank) => {
  const {Branches} = Bank;
  return (dispatch) => {
    dispatch(banksActions.getBranches(Branches));
  };
};
