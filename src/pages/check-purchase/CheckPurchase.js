import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { getConfigHandler } from "./getConfigHandler";
import { validate } from "./validation";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const { config, paymentsData } = getConfigHandler(language);

  const initialFormValues = useMemo(() => {
    const formValues = {};

    config.sections.forEach((section) => {
      section.inputs.forEach((input) => {
        formValues[input.name] = "";
      });
    });

    return formValues;
  }, [config]);

  const [inputValues, setInputValues] = useState(initialFormValues);

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      inputValues={inputValues}
      setInputValues={setInputValues}
    >
      <FormTable tableDetails={paymentsData} />
    </FormHandler>
  );
}

export default CheckPurchase;
