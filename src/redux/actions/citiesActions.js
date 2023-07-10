import { useAxios } from "../../hooks/useAxios";
import { citiesActions } from "../reducers/citiesReducer";

export const getCitiesAction = (cities) => {
  return (dispatch) => {
    dispatch(citiesActions.getCities(cities));
  };
};

export const getStreetsAction = () => {
  return async (dispatch) => {
    try {
      const response = await useAxios({
        method: "GET",
        url: "/ErnServices/api/generaldata/GetStreets?cityid=8",
        headers: {
          accept: "*/*",
        },
      });
      console.log({ response });
      dispatch(citiesActions.getStreets(response));
    } catch (error) {
      console.error(error);
    }
  };
};
