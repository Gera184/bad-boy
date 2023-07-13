import styled from "styled-components";
import { Field, Form } from "formik";

export const FormWrapper = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--div, #e1e5ed);
  height: 42px;

  p {
    padding-right: 25px;
  }
`;
export const Spacer = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 30px;
  padding-bottom: 74px;
`;

export const SectionWrapper = styled.div`
  height: 750px;
  border-radius: 3px;
  border: 1px solid var(--div, #e1e5ed);
  background: var(--white, #fff);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
`;

export const SectionContainer = styled.div`
  padding-right: 20px;
  padding-left: 30px;
`;

export const StyledInput = styled(Field)`
  border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #000;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;

  ${({ error }) =>
    error &&
    `
    padding-right:17px;
    border-bottom: 1px solid red;
  `}
`;

export const StyledSelect = styled(Field)`
  border: none;
  border-bottom: 1px solid #8c8c8c;
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-wrap: wrap;
  gap: 24px 30px; /* Add 60px vertical spacing and 30px horizontal spacing */
`;

export const ErrorMessageText = styled.div`
  color: var(--error, #9f0000);
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding-top: ${(props) => (props.isFirst ? "30px" : "55px")};
  padding-bottom: 50px;
`;

export const TitleContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    color: var(--button-blue, #0053ab);
  }
`;

export const Title = styled.p`
  margin: 0;
  color: var(--text-blue, #0b1937);
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
`;
