import React, { useMemo } from "react";
import { Text, TextWrapper, Title, Wrapper } from "./CheckPurchase.styles";
import { useSelector } from "react-redux";
import FormHandler from "../../components/form/FormHandler";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const { user } = useSelector((user) => user.user);

  const {
    checkPurchase,
    purchasedetails,
    purchasesum,
    paymentsnumber,
    checknumber,
    date,
  } = language.texts;

  const config = [
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

  const generateOptions = useMemo(() => {
    return (start, end) => {
      const options = [];

      for (let i = start; i <= end; i++) {
        options.push(
          <option key={i} value={`option${i}`}>
            Option {i}
          </option>
        );
      }

      return options;
    };
  }, []);

  return (
    <Wrapper>
      <Title>{checkPurchase}</Title>
      <TextWrapper>
        <Text>{purchasedetails}</Text>
        <FormHandler
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          validate={validate}
          config={config}
          generateOptions={generateOptions}
        >
          <button type="submit">Submit</button>
        </FormHandler>
      </TextWrapper>
    </Wrapper>
  );
}

export default CheckPurchase;
