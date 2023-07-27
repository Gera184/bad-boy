import styled from "styled-components";

export const OTPWrapper = styled.div`
  display: flex;
  height: 350px;
  width: 350px;
  flex-direction: column;
`;

export const Title = styled.span`
  padding-top: 42px;
  padding-bottom: 33px;
  color: var(#0b1937);
  text-align: right;
  leading-trim: both;
  text-edge: cap;
  font-family: Heebo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DigitContainer = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  flex-direction: row-reverse;
  justify-content: space-evenly;
`;

export const DigitInput = styled.input`
  width: 43px;
  height: 51px;
  border-radius: 3px;
  border: 1px solid #0b1937;
  background: #fff;
  margin-right: 28px;
  color: #0053ab;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Heebo;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ExpirationRemark = styled.span`
  color: var(--text-blue-0-b-1937, #0b1937);
  text-align: right;
  leading-trim: both;
  text-edge: cap;
  font-family: Heebo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-top: 19px;
`;
