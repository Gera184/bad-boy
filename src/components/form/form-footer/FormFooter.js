import React from "react";
import Button from "../../button/Button";
import {
  FooterButtonWrapper,
  FooterStatus,
  FooterStatusInfo,
  FooterStatusTitle,
  FooterStatusWrapper,
  FooterWrapper,
} from "./FormFooter.styles";
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
