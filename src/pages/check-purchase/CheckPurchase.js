/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { getConfigHandler } from "./getConfigHandler";
import { validate } from "./validation";
import { initTable } from "../../utils/initTable";
import { initTableByEdit } from "../../utils/initTableByEdit";
import { axiosRequest } from "../../utils/axiosRequest";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const { paymentnumber, PaymentDate, checksum, checknumber } = language.texts;
  const { config } = getConfigHandler(language);

  const initialFormValues = useMemo(() => {
    const initFormValues = {};
    const initInputValues = {};

    config.sections.forEach((section) => {
      section.inputs.forEach((input) => {
        initFormValues[input.name] = "";
        initInputValues[input.name] = { ...input, value: "" }; // Include the entire input object and set an initial empty string value
      });
    });

    return { initFormValues, initInputValues };
  }, [config]);

  const [response, setResponse] = useState(null);
  const [inputValues, setInputValues] = useState(initialFormValues);
  const [paymentsData, setPaymentsData] = useState({
    titles: [paymentnumber, PaymentDate, checksum, checknumber],
    rows: [],
  });

  const handleSubmit = async (values) => {
    const {
      account,
      bank,
      branch,
      cellPhoneNumber,
      checkNumber,
      dueDate,
      paymentNumber,
      purchaseSum,
    } = values;

    try {
      const res = await axiosRequest({
        method: "POST",
        url: "/ErnTransApiChannel/Pos/ProcessPurchaseTransaction",
        headers: {
          accept: "*/*",
        },
        data: {
          clientRequestId: "string",
          clientRequestCode: "string",
          retailerId: 0,
          manufacturerId: "string",
          manufacturerVersion: 0,
          requestUniqueId: "string",
          bankNumber: bank,
          branchNumber: branch,
          checkType: "string",
          secureDigit: "string",
          accountNumber: account,
          serviceId: 3,
          transactionType: "string",
          totalSum: purchaseSum,
          voiceAuthorizationNumber: 0,
          numberOfPayments: paymentNumber,
          customerId: 3,
          guarantorId: 0,
          phoneNumber: cellPhoneNumber,
          checkNumber: checkNumber,
          _DueDate: dueDate,
          lastCheckSum: 0,
          checkSum: 0,
          swiped: "string",
          j5Type: "string",
          carNumber: "string",
          orderNumber: "string",
          orderCustomerNumber: "string",
          paymentsList: [
            {
              paymentNumber: 0,
              checkNumber: 0,
              dueDate: "2023-07-17T12:06:45.948Z",
              checkSum: 0,
            },
          ],
        },
      });

      setResponse(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTableChange = useCallback(
    (event) => {
      setPaymentsData((prevPaymentsData) => ({
        titles: [...prevPaymentsData.titles],
        rows: initTableByEdit(
          prevPaymentsData.rows,
          event,
          inputValues.purchaseSum,
          inputValues.paymentNumber
        ),
      }));
    },
    [inputValues]
  );

  useEffect(() => {
    // checking if payment more then 1 and changing firstCheckSum readonly according to it
    setInputValues((prevInputValues) => {
      const paymentNumberValue =
        prevInputValues.initInputValues.paymentNumber?.value;

      const updatedFirstCheckSum = {
        ...prevInputValues.initInputValues.firstCheckSum,
        readOnly: paymentNumberValue > 1 ? false : true,
        value:
          paymentNumberValue > 1
            ? prevInputValues.initInputValues.firstCheckSum.value
            : "",
      };

      const updatedInitInputValues = {
        ...prevInputValues.initInputValues,
        firstCheckSum: updatedFirstCheckSum,
      };

      return {
        ...prevInputValues,
        initInputValues: updatedInitInputValues,
      };
    });
  }, [inputValues.initInputValues.paymentNumber?.value]);

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      inputValues={inputValues}
      setInputValues={setInputValues}
      response={response}
    >
      <FormTable tableDetails={paymentsData} onChange={handleTableChange} />
    </FormHandler>
  );
}

export default CheckPurchase;
