import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ children }) => {
  return <ButtonWrapper type="submit">{children}</ButtonWrapper>;
};

export default Button;
