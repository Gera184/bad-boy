import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { validate } from "./validation";
import { getConfigHandler } from "./getConfigHandler";
import { useAxios } from "../../hooks/useAxios";
import {
  getCitiesAction,
  getStreetsAction,
} from "../../redux/actions/citiesActions";

const HokPurchase = () => {
  const dispatch = useDispatch();
  const { language, citiesData, banks } = useSelector((state) => state);
  const { config, paymentsData } = getConfigHandler(
    language,
    citiesData,
    banks
  );

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const handleControlChange = (value) => {
    dispatch(getStreetsAction(value));
  };

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      action={handleControlChange}
    ></FormHandler>
  );
};

export default HokPurchase;
