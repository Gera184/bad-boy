import { axiosRequest } from "../../utils/axiosRequest";
import { citiesActions } from "../reducers/citiesReducer";

export const getCitiesAction = (cities) => {
  return (dispatch) => {
    dispatch(citiesActions.getCities(cities));
  };
};

export const getStreetsAction = (value) => {
  const { Id } = value;

  return async (dispatch) => {
    try {
      const response = await axiosRequest({
        method: "GET",
        url: `/ErnServices/api/generaldata/GetStreets?cityid=${Id}`,
        headers: {
          accept: "*/*",
        },
      });
      dispatch(citiesActions.getStreets(response));
    } catch (error) {
      console.error(error);
    }
  };
};
