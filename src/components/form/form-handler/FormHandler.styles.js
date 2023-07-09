import styled from "styled-components";
import { Field, Form } from "formik";

export const FormWrapper = styled(Form)`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 55px;
  padding-right: 55px;
  padding-left: 66px;
`;

export const SectionContainer = styled.div`
  padding-right: 55px;
  padding-left: 66px;
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
`;

export const StyledSelect = styled(Field)`
  border: none;
  border-bottom: 1px solid #8c8c8c;
  width: 60px;
`;
export const StyledForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width && props.width};
`;

export const TitleWrapper = styled.div`
  padding-top: ${(props) => (props.isFirst ? "30px" : "55px")};
  padding-bottom: 50px;
`;
export const TitleContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: flex-end;
  background-color: #fbf8f8;
  border-bottom: 1px solid #a69f9f;
`;
export const Title = styled.p`
  color: #000;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding-right: 10px;
`;



