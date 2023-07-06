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

export const FormFooter = () => {
  return (
    <FooterWrapper>
      <FooterStatusWrapper>
        <FooterStatusTitle>Status</FooterStatusTitle>
        <FooterStatus>Open</FooterStatus>
        <FooterStatusInfo>Additino==onal Info</FooterStatusInfo>
      </FooterStatusWrapper>
      <FooterButtonWrapper>
        <Button>hjkhjk</Button>
      </FooterButtonWrapper>
    </FooterWrapper>
  );
};
