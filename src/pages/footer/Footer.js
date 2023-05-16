import React from "react";
import { FooterText, FooterWrapper, LtdText } from "./Footer.styled";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `כל הזכויות שמורות © ${currentYear}`;

  return (
    <FooterWrapper>
      <FooterText>{copyrightText}</FooterText>
    </FooterWrapper>
  );
};
