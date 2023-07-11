import React from "react";
import { FooterWrapper } from "./FormFooter.styles";
import { ButtonWrapper } from "../../button/Button.styles";

export const FormFooter = () => {
  return (
    <FooterWrapper>
      {/* <FooterStatusWrapper>
        <FooterStatusTitle>Status</FooterStatusTitle>
        <FooterStatus>Open</FooterStatus>
        <FooterStatusInfo>Additino==onal Info</FooterStatusInfo>
      </FooterStatusWrapper>
      <FooterButtonWrapper>
    </FooterButtonWrapper> */}
      <ButtonWrapper type="submit">send</ButtonWrapper>
    </FooterWrapper>
  );
};
