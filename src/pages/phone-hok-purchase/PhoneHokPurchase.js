import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { validate } from "./validation";
import { getConfigHandler } from "./getConfigHandler";

function PhoneHokPurchase() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const { paymentnumber, PaymentDate, checksum, checknumber } = language.texts;
  const { config } = getConfigHandler(language);

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
  const [paymentsData, setPaymentsData] = useState({
    titles: [paymentnumber, PaymentDate, checksum, checknumber],
    values: [],
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const handleSelectChange = (value) => {};

  const PaymentDataHandler = useCallback(() => {}, [inputValues]);

  useEffect(() => {
    PaymentDataHandler();
  }, []);

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      action={handleSelectChange}
      inputValues={inputValues}
      setInputValues={setInputValues}
      initialFormValues={initialFormValues}
    ></FormHandler>
  );
}

export default PhoneHokPurchase;
