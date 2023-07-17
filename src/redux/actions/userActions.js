import { axiosRequest } from "../../utils/axiosRequest";
import { userActions } from "../reducers/userReducer";

export const loginAction = () => {
  return async (dispatch) => {
    try {
      const response = await axiosRequest({
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
