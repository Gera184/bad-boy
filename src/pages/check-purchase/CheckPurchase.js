import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { getConfigHandler } from "./getConfigHandler";
import { validate } from "./validation";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
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

  const PaymentDataHandler = useCallback(() => {
    const { purchaseSum, paymentNumber, dueDate, checkNumber } = inputValues;
    const paymentData = {
      paymentNumber: paymentNumber,
      dueDate: dueDate,
      checkSum: 0,
      checkNumber: checkNumber,
    };
    if (
      purchaseSum === "9999" &&
      paymentNumber === "9999" &&
      checkNumber === "9999"
    ) {
      setPaymentsData((prevPaymentsData) => ({
        ...prevPaymentsData,
        values: [paymentData],
      }));
    }
  }, [inputValues]);

  useEffect(() => {
    PaymentDataHandler();
  }, []);

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      inputValues={inputValues}
      setInputValues={setInputValues}
      initialFormValues={initialFormValues}
    >
      {paymentsData.values.length > 0 && (
        <FormTable tableDetails={paymentsData} />
      )}
    </FormHandler>
  );
}

export default CheckPurchase;
