import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  direction: rtl;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  width: 60%;
  flex-shrink: 0;
  background: linear-gradient(180deg, #eff1fe 0%, rgba(239, 241, 254, 0) 100%);
  direction: rtl;
`;

export const ContainerRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 80px;
  padding-top: 40px;
  // padding-bottom:189px;
`;

export const Header = styled.div``;

export const LogoImage = styled.div`
  img {
    height: 37px;
    width: 93px;
    // margin: 40px 80px 0 0;
  }
`;

export const LoginsWrapper = styled(Tabs)`
  height: 350px;
  width: 350px;
  button {
    display: flex;
  }
`;

export const LoginOptions = styled(TabList)`
  padding-right: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 18px;
  padding: 0;
  list-style-type: none;

  p {
    color: var(--text-blue-0-b-1937, #0b1937);
    font-family: Heebo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

export const LoginOption = styled(Tab)`
  cursor: pointer;
  list-style: none;
  color: ${(props) => (props.isActive ? "#0053AB" : "#0B1937")};
  border-bottom: ${(props) => (props.isActive ? "2px solid #0053AB" : "")};
`;

export const LoginInputs = styled(TabPanel)`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 37px;
`;

export const Label = styled.label`
  color: var(--text-blue-0-b-1937, #0b1937);
  text-align: right;
  font-family: Heebo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Input = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid var(#0b1937);
  padding-top: 12.5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  flex-direction: row-reverse;
  align-items: center;
`;

export const LinkBtn = styled(Link)`
  color: var(--but-blue-0053-ab, #0053ab);
  text-align: right;
  leading-trim: both;
  text-edge: cap;
  font-family: Heebo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

export const Title = styled.h1`
  // margin: 87px 80px 0 0;

  color: var(--but-blue-0053-ab, #0053ab);
  font-family: Heebo;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const Footer = styled.div`
  padding-bottom: 189px;

  h3 {
    color: var(--but-blue-0053-ab, #0053ab);
    text-align: right;
    font-family: Heebo;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #000;
    text-align: right;
    font-family: Heebo;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    width: 433px;
    height: 75px;
    margin: 0;
  }
`;
