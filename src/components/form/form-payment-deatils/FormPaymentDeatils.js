import React from "react";
import {
  Container,
  Details,
  PaymentDetailsWrapper,
  Title,
  Wrapper,
} from "./FormPaymentDetails.styles";

export const FormPaymentDetails = ({ paymentDetails }) => {
  paymentDetails = {
    titles: ["מספר תשלום", "תאריך חיוב", "סכום צ׳ק", "מספר צ׳ק"],
    values: [
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
      {
        rows: ["1", "05/05/2023", "₪1200", "16546545", "16546545"],
      },
    ],
  };

  const { titles, values } = paymentDetails;

  return (
    <Wrapper>
      <PaymentDetailsWrapper>
        <Container>
          {titles.map((title, index) => (
            <div key={index}>
              <Title> {title} </Title>
              {values.map((row, rowIndex) => (
                <div key={rowIndex}>
                  <Details key={rowIndex}>{row.rows[index]}</Details>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </PaymentDetailsWrapper>
    </Wrapper>
  );
};
