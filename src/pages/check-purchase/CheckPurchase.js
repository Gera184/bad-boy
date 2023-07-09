import React from "react";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { getConfigHandler } from "./getConfigHandler";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const { config, paymentsData } = getConfigHandler(language);

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
  };

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
    >
      <FormTable tableDetails={paymentsData} />
    </FormHandler>
  );
}

export default CheckPurchase;
