import React, { useMemo } from "react";
import { Container, FormWrapper, Title, Wrapper } from "./CheckPurchase.styles";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/FormHandler";
import Button from "../../components/button/Button";
import plus from "../../assets/icons/Plus.svg";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);

  const {
    checkPurchase,
    purchasedetails,
    customerdeatils,
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
      title: customerdeatils,
      inputs: [
        {
          placeHolder: "Customer Name",
          type: "text",
        },
        {
          placeHolder: "Email",
          type: "email",
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

  //UseMemo is a React Hook that allows you to memoize a value or function, optimizing performance by preventing unnecessary recalculations or re-rendering.
  const generateOptions = useMemo(() => {
    return (start, end) => {
      const options = [];

      for (let i = start; i <= end; i++) {
        options.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }

      return options;
    };
  }, []);

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
          generateOptions={generateOptions}
        />
      </FormWrapper>
    </Wrapper>
  );
}

export default CheckPurchase;
