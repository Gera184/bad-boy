import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({
  type,
  fontSize,
  background,
  borderColor,
  textColor,
  disabled,
  children,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      textColor={textColor}
      borderColor={borderColor}
      background={background}
      fontSize={fontSize}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
