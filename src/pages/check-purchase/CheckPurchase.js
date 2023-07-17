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
    rows: [],
  });

  const handleSubmit = async (values) => {
    const {
      CustomerNumber,
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
      const response = await axiosRequest({
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
          customerId: CustomerNumber,
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

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const HandleTable = useCallback(() => {
    const { purchaseSum, paymentNumber, dueDate, checkNumber } = inputValues;
    let paymentData;

    if (
      purchaseSum !== "" &&
      paymentNumber !== "" &&
      checkNumber !== "" &&
      dueDate !== "" &&
      Number(paymentNumber) <= Number(purchaseSum)
    ) {
      paymentData = initTable(
        "FROM hANDLE:",
        purchaseSum,
        paymentNumber,
        checkNumber,
        dueDate
      );
    } else {
      paymentData = [];
    }

    setPaymentsData((prevPaymentsData) => ({
      titles: [...prevPaymentsData.titles],
      rows: paymentData,
    }));
  }, [inputValues, setPaymentsData]);

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
    HandleTable();
  }, [
    inputValues.purchaseSum,
    inputValues.paymentNumber,
    inputValues.dueDate,
    inputValues.checkNumber,
  ]);

  useEffect(() => {
    handleTableChange();
  }, [handleTableChange, inputValues.firstCheckSum]);

  useEffect(() => {
    //CALL CHANGE firstCheckSum TO READONLY=FALSE/TRUE
    //callChangeReadonly()
  }, [inputValues.paymentNumber]);

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      inputValues={inputValues}
      setInputValues={setInputValues}
      initialFormValues={initialFormValues}
    >
      <FormTable tableDetails={paymentsData} onChange={handleTableChange} />
    </FormHandler>
  );
}

export default CheckPurchase;
