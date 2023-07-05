import React from "react";
import { Container, FormWrapper, Title, Wrapper } from "./CheckPurchase.styles";
import { useSelector } from "react-redux";

import Button from "../../components/button/Button";
import plus from "../../assets/icons/Plus.svg";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormPaymentDetails } from "../../components/form/form-payment-deatils/FormPaymentDeatils";

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

  const initialValues = {
    purchasesum: config.placeHolder, // Set the default value for number fields
    paymentsnumber: config.placeHolder, // Set the default value for select fields
    checknumber: config.placeHolder, // Set the default value for number fields
    date: config.placeHolder, // Set the default value for date fields
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
      <FormWrapper>
        <FormHandler
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          validate={validate}
          config={config}
        />
        <FormPaymentDetails />
      </FormWrapper>
    </Wrapper>
  );
}

export default CheckPurchase;
