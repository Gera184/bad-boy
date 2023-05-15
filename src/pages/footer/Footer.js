import React from "react";
import { FooterText, FooterWrapper, LtdText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()} <LtdText>Ltd</LtdText> All rights
        reserved.
      </FooterText>
    </FooterWrapper>
  );
};
