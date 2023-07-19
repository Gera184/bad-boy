/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRetailerParameters,
  loginAction,
} from "../../redux/actions/userActions";

import {
  Wrapper,
  ContainerRight,
  ContainerLeft,
  Header,
  LogoImage,
  LoginsWrapper,
  LoginOptions,
  LoginInputs,
  Label,
  Input,
  LoginOption,
  Field,
  ButtonsContainer,
  LinkBtn,
  Title,
} from "./Login.styles";

import ErnLogo from "../../assets/images/ErnLogo.svg";
import Button from "../button/Button";
import { getConfigHandler } from "./getConfigHandler";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { language, user } = useSelector((state) => state);
  const { config } = getConfigHandler(language);
  const { title, tabs, inputs, buttons, fotter } = config;

  const [tabIndex, setTabIndex] = useState(0);
  const [inputValues, setInputValues] = useState({}); // Initialize an empty object for input values

  const loginHandler = async () => {
    try {
      const response = await axiosRequest({
        method: "POST",
        url: "/ErnTransApichannel/Authentication/Login",
        headers: {
          accept: "/",
          userCode: "username",
          tokenPublic: null,
        },
        data: {
          manufacturerId: "RNT",
          manufacturerVersion: "1",
          retailerId: 0,
          userCode: "username",
          tokenPublic: null,
          tx: "",
        },
      });

      const { responseCode } = response;
      const { sessionId } = response?.data;

      if (responseCode === 0 && sessionId) {
        dispatch(loginAction(response));
        navigate("/CheckPurchase");

        const secondResponse = await axiosRequest({
          method: "POST",
          url: "/ErnTransApiChannel/Pos/GetRetailerParameters",
          headers: {
            accept: "/",
            userCode: "username",
            tokenPublic: null,
          },
          data: {
            loginRetailerId: 300000,
            sessionId: "string",
            userCode: "string",
            posManufacturerId: "string",
            posManufacturerVersion: "string",
            retailerId: 0,
          },
        });

        dispatch(getRetailerParameters(secondResponse));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    // Update the input values based on the input's name
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <Wrapper>
      <ContainerRight>
        <Header>
          <LogoImage>
            <img src={ErnLogo} alt="logo" />
          </LogoImage>
        </Header>
        <LoginsWrapper
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <Title>{title}</Title>
          <LoginOptions>
            {tabs.map((tab, index) => (
              <React.Fragment key={index}>
                <LoginOption>{tab}</LoginOption>
                {index !== tabs.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </LoginOptions>
          <LoginInputs>
            {inputs.otp.map((input, index) => (
              <Field key={input.id}>
                <Label>{input.name}</Label>
                <Input
                  name={input.id} // Set the name attribute for the input
                  type={input.type}
                  onChange={onChangeHandler}
                  value={inputValues[input.id] || ""} // Set the value from the inputValues object
                />
              </Field>
            ))}
            <ButtonsContainer>
              <Button>{buttons.otp}</Button>
            </ButtonsContainer>
          </LoginInputs>
          <LoginInputs>
            {inputs.usernameAndPass.map((input, index) => (
              <Field key={input.id}>
                <Label>{input.name}</Label>
                <Input
                  name={input.id} // Set the name attribute for the input
                  type={input.type}
                  onChange={onChangeHandler}
                  value={inputValues[input.id] || ""} // Set the value from the inputValues object
                />
              </Field>
            ))}
            <ButtonsContainer>
              <Button onClick={loginHandler}>{buttons.usernameAndPass}</Button>
              <LinkBtn>{buttons.forgotPasswordBtn}</LinkBtn>
            </ButtonsContainer>
          </LoginInputs>
        </LoginsWrapper>
      </ContainerRight>
      <ContainerLeft></ContainerLeft>
    </Wrapper>
  );
};

export default Login;
