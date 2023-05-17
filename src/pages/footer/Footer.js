import React from "react";
import {
  Contact,
  ContactDetails,
  ContactIcon,
  FooterText,
  FooterWrapper,
} from "./Footer.styled";
import { ReactComponent as Phone } from "../../assets/icons/contact/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/contact/mail.svg";

import contactData from "./contactDetails";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `כל הזכויות שמורות © ${currentYear}`;

  return (
    <>
      <FooterWrapper isMain>
        <FooterText isMain>
          <Contact href={`tel:+${contactData.phone}`}>
            <ContactIcon>
              <Phone />
            </ContactIcon>
            <ContactDetails>{contactData.phone}</ContactDetails>
          </Contact>
        </FooterText>
        <FooterText isMain>
          <Contact href={`mailto:${contactData.email}`}>
            <ContactIcon>
              <Mail />
            </ContactIcon>
            <ContactDetails>{contactData.email}</ContactDetails>
          </Contact>
        </FooterText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>{copyrightText}</FooterText>
      </FooterWrapper>
    </>
  );
};
