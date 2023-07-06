import React, { useEffect, useState } from "react";
import { Container, FormWrapper, Title, Wrapper } from "./CheckPurchase.styles";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import plus from "../../assets/icons/Plus.svg";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { FormTable } from "../../components/form/form-table/FormTable";
import { FormFooter } from "../../components/form/form-footer/FormFooter";
import { getConfigHandler } from "./getConfigHandler";

function CheckPurchase() {
  const { language } = useSelector((lang) => lang);
  const { checkPurchase } = language.texts;
  const { config, paymentsData } = getConfigHandler(language);

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
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
      </FormHandler>
    </Wrapper>
  );
}

export default CheckPurchase;
