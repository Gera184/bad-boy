import React, { useEffect, useState } from "react";
import V from "../../../assets/icons/V.svg";
import InfoFull from "../../../assets/icons/info_full.svg";
import infoFullCall from "../../../assets/icons/info_full_call.svg";

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

export const FormFooter = ({ response }) => {
  const { language } = useSelector((lang) => lang);
  const brResponse = response?.data?.brResponse;

  const [config, setConfig] = useState({
    statusLabel: "",
    statusText: {},
    contactUsText: "",
    middleContent: {},
    leftButtons: [
      {
        type: "submit",
        background: "var(--green, #33B629)",
        textColor: "white",
        disabled: false,
        borderColor: "#33B629",
        children: "שידור עסקה",
      },
    ],
    error: {},
  });

  useEffect(() => {
    console.log(brResponse);
    switch (brResponse) {
      case "AUTH":
        setConfig({
          statusLabel: "סטטוס עסקה",
          statusText: {
            icon: V,
            alt: "v",
            text: "העסקה אושרה",
          },
          middleContent: {
            statusLabel: "מספר אישור",
            statusText: "39393729",
          },
          leftButtons: [
            {
              type: "submit",
              background: "transparent",
              textColor: "var(--green, #33B629)",
              disabled: false,
              borderColor: "#33B629",
              children: "הדפסת אישור",
            },
            {
              type: "submit",
              background: "var(--green, #33B629)",
              textColor: "white",
              disabled: true,
              borderColor: "gray",
              children: "שידור עסקה",
            },
          ],
        });
        break;

      case "CALL":
        setConfig({
          statusLabel: "סטטוס עסקה",
          statusText: {
            icon: infoFullCall,
            alt: "infoFullCall",
            text: "נדרש בירור",
          },
          contactUsText: "התקשר אלינו 03-9534222",
          middleContent: {
            button: {
              type: "submit",
              background: "transparent",
              textColor: "var(--green, #33B629)",
              disabled: false,
              borderColor: "#33B629",
              children: "הדפסת אישור",
            },
            inputPlaceholder: "מספר אישור",
          },
          leftButtons: [
            {
              type: "submit",
              background: "var(--green, #33B629)",
              textColor: "white",
              disabled: true,
              borderColor: "gray",
              children: "שידור עסקה",
            },
          ],
        });
        break;
      case "DECL":
        setConfig({
          statusLabel: "סטטוס עסקה",
          statusText: {
            icon: infoFullCall,
            alt: "infoFullCall",
            text: "העסקה נדחתה",
          },

          leftButtons: [
            {
              type: "submit",
              background: "var(--green, #33B629)",
              textColor: "white",
              disabled: true,
              borderColor: "gray",
              children: "שידור עסקה",
            },
          ],
        });
        break;

      default:
        break;
    }
  }, [brResponse]);

  return (
    <FooterWrapper>
      <Container gap="20px">
        {config?.error && (
          <StatusLabel fontSize="14px" color="var(--error, #9F0000)" gap="3px">
            <img src={config?.error.icon} alt={config?.error.alt} />
            {config?.error.text}
          </StatusLabel>
        )}
        {config?.leftButtons?.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </Container>
      <Container>
        {config?.middleContent &&
        config?.middleContent.statusLabel &&
        config?.middleContent.statusText ? (
          <StatusesContainer>
            <StatusLabel>{config?.middleContent.statusLabel}</StatusLabel>
            <StatusLabel>{config?.middleContent.statusText}</StatusLabel>
          </StatusesContainer>
        ) : (
          config?.middleContent &&
          config?.middleContent.inputPlaceholder &&
          config?.middleContent.button && (
            <StatusesContainer gap="23px" flexDirection="row">
              <StatusInput
                placeholder={config?.middleContent.inputPlaceholder}
              />
              <Button {...config.middleContent.button} />
            </StatusesContainer>
          )
        )}
      </Container>

      {config?.statusLabel && (
        <Container>
          <StatusesContainer>
            <StatusLabel>{config?.statusLabel}</StatusLabel>
            <Status color={config?.statusColor}>
              {config?.statusText.icon && (
                <img
                  src={config?.statusText.icon}
                  alt={config?.statusText.alt}
                />
              )}
              {config?.statusText.text}
            </Status>
            {config?.contactUsText && (
              <StatusLabel>{config?.contactUsText}</StatusLabel>
            )}
          </StatusesContainer>
        </Container>
      )}
    </FooterWrapper>
  );
};
