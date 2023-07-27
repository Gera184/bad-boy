import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import { ButtonsContainer, LinkBtn } from "./Login.styles";
import {
  DigitContainer,
  DigitInput,
  ExpirationRemark,
  OTPWrapper,
  Title,
} from "./OTPVerification.styles";

const OTPVerification = () => {
  const [otpInputs, setOtpInputs] = useState([]);
  const inputRefs = useRef([]);
  const numberOfInputs = 6;

  useEffect(() => {
    inputRefs.current[0].focus(); // Set focus to the first input field
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setOtpInputs((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = value;
        return updatedOtp;
      });

      // Move to the next input field after typing a digit
      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    // Move to the previous input field when backspace is pressed
    if (e.keyCode === 8 && index > 0) {
      // Clear the current input field
      setOtpInputs((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = "";
        return updatedOtp;
      });
      inputRefs.current[index - 1].focus();
    } else if (e.keyCode === 8 && index === 0) {
      // If at the first input field, just clear its value
      setOtpInputs((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = "";
        return updatedOtp;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otpInputs.join("");
  };

  return (
    <OTPWrapper>
      <Title>כאן מקלידים את הקוד שקבלת בסמס לטלפון 7890******</Title>
      <DigitContainer>
        {Array(numberOfInputs)
          .fill("")
          .map((_, index) => (
            <DigitInput
              key={index}
              type="text"
              maxLength="1"
              value={otpInputs[index] || ""}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
      </DigitContainer>
      <ExpirationRemark>הקוד תקף ל 5 דקות</ExpirationRemark>
      <ButtonsContainer>
        <Button onClick={handleSubmit}>כניסה</Button>
        <LinkBtn>לא קיבלתי שלח לי שוב</LinkBtn>
      </ButtonsContainer>
    </OTPWrapper>
  );
};

export default OTPVerification;
