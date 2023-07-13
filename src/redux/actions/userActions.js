import { useAxios } from "../../hooks/useAxios";
import { userActions } from "../reducers/userReducer";

export const loginAction = () => {
  return async (dispatch) => {
    try {
      const response = await useAxios({
        method: "POST",
        url: "/ErnTransApiChannel/Pos/GetRetailerParameters",
        headers: {
          accept: "*/*",
        },
        data: {
          loginRetailerId: 300000,
          sessionId: "string",
          userCode: "string",
          posManufacturerId: "string",
          posManufacturerVersion: "string",
          retailerId: 0,
        },
      });
      dispatch(userActions.userData(response));
    } catch (error) {
      console.error(error);
    }
  };
};
