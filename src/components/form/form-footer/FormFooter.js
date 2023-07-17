import React from "react";
import Button from "../../button/Button";
import {
  Container,
  FooterWrapper,
  Status,
  StatusesContainer,
  StatusInput,
  StatusLabel,
} from "./FormFooter.styles";
import { useSelector } from "react-redux";
import { getConfigHandler } from "./getConfigHandler";

export const FormFooter = () => {
  const { language } = useSelector((lang) => lang);
  const { config } = getConfigHandler(language);
  const {
    leftButtons,
    statusLabel,
    statusText,
    statusColor,
    contactUsText,
    middleContant,
    error,
  } = config;

  return (
    <FooterWrapper>
      <Container gap="20px">
        {error && (
          <StatusLabel fontSize="14px" color="var(--error, #9F0000)" gap="3px">
            <img src={error.icon} alt={error.alt} />
            {error.text}
          </StatusLabel>
        )}
        {leftButtons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </Container>
      <Container>
        {middleContant.statusLabel && middleContant.statusText ? (
          <StatusesContainer>
            <StatusLabel>{middleContant.statusLabel}</StatusLabel>
            <StatusLabel>{middleContant.statusText}</StatusLabel>
          </StatusesContainer>
        ) : (
          middleContant.buttonLabel &&
          middleContant.inputPlaceholder && (
            <StatusesContainer gap="23px" flexDirection="row">
              <StatusInput placeholder={middleContant.inputPlaceholder} />
              <Button disabled={true}>{middleContant.buttonLabel}</Button>
            </StatusesContainer>
          )
        )}
      </Container>

      {statusLabel && statusText && (
        <Container>
          <StatusesContainer>
            <StatusLabel>{statusLabel}</StatusLabel>
            <Status color={statusColor}>
              {statusText.icon && (
                <img src={statusText.icon} alt={statusText.alt} />
              )}
              {statusText.text}
            </Status>
            {contactUsText && <StatusLabel>{contactUsText}</StatusLabel>}
          </StatusesContainer>
        </Container>
      )}
    </FooterWrapper>
  );
};
