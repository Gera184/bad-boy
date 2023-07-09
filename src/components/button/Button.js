import React from "react";
import { ButtonWrapper} from "./Button.styles";

const Button = ({ type,children }) => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

export default Button;
 

