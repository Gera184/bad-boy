import React, { useEffect, useState } from "react";
import { Container, FormWrapper, Title, Wrapper } from "./CheckPurchase.styles";
import { useSelector } from "react-redux";

import Button from "../../components/button/Button";
import plus from "../../assets/icons/Plus.svg";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { FormFooter } from "../../components/form/form-footer/FormFooter";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const {
    checkPurchase,
    purchasedetails,
    customerdetails,
    purchasesum,
    paymentsnumber,
    checknumber,
    date,
  } = language.texts;

  const config = [
    {
      title: purchasedetails,
      inputs: [
        {
          placeHolder: purchasesum,
          type: "text",
        },
        {
          placeHolder: paymentsnumber,
          type: "select",
          optionsList: [
            { value: "1", text: "sadsad" },
            { value: "1", text: "sadsad" },
            { value: "1", text: "sadsad" },
            { value: "1", text: "sadsad" },
          ],
        },
        {
          placeHolder: checknumber,
          type: "text",
        },
        {
          placeHolder: date,
          type: "date",
        },
      ],
    },
    {
      title: customerdetails,
      inputs: [
        {
          placeHolder: "Customer Name",
          type: "text",
        },
        {
          placeHolder: "Select",
          type: "select",
          optionsList: [{ value: "2", text: "sadsad" }],
        },
        {
          placeHolder: "Address",
          type: "text",
        },
        {
          placeHolder: "Phone Number",
          type: "tel",
        },
      ],
    },
  ];

  const paymentsData = {
    titles: [
      "language.texts.purchasesum",
      "תאריך חיוב",
      "סכום צ׳ק",
      "מספר צ׳ק",
    ],
    values: [
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
    ],
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    // Add your validation logic here
    if (!values.purchasesum) {
      errors.purchasesum = "Required";
    }

    if (!values.paymentsnumber) {
      errors.paymentsnumber = "Required";
    }

    if (!values.checknumber) {
      errors.checknumber = "Required";
    }

    if (!values.date) {
      errors.date = "Required";
    }

    return errors;
  };

  return (
    <Wrapper>
      <Container>
        <Title>{checkPurchase}</Title>
        <Button>
          <img src={plus} alt="plus" /> עסקה חדשה
        </Button>
      </Container>
      <FormHandler
        handleSubmit={handleSubmit}
        validate={validate}
        config={config}
      >
        <FormTable tableDetails={paymentsData} />
        <FormFooter />
      </FormHandler>
    </Wrapper>
  );
}

export default CheckPurchase;
