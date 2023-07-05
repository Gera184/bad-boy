import React from "react";
import {
  Container,
  PaymentDetailsWrapper,
  Title,
  Wrapper,
} from "./FormPaymentDetails.styles";

export const FormPaymentDetails = ({ paymentDetails }) => {
  paymentDetails = {
    titles: ["מספר תשלום", "תאריך חיוב", "סכום צ׳ק", "מספר צ׳ק"],
    values: ["1", "05/05/2023", "₪1200", "16546545"],
  };

  return (
    <Wrapper>
      <PaymentDetailsWrapper>
        <Container>
          <Title>{paymentDetails.titles.map((title) => title)}</Title>
        </Container>
        <Container>
          <Title>{paymentDetails.values.map((value) => value)}</Title>
        </Container>
      </PaymentDetailsWrapper>
    </Wrapper>
  );
};
