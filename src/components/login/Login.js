/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  FieldWrapper,
  ButtonsContainer,
  LinkBtn,
  Footer,
  Title,
} from "./Login.styles";

import ErnLogo from "../../assets/images/ErnLogo.svg";
import Button from "../button/Button";
import { getConfigHandler } from "./getConfigHandler";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest";
import { Formik } from "formik";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { language } = useSelector((state) => state);
  const { config } = getConfigHandler(language);
  const { title, tabs, inputs, buttons, fotter } = config;

  const [showOtpSendCode, setShowOtpSendCode] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [inputValues, setInputValues] = useState({}); // Initialize an empty object for input values

  const formikRef = useRef(null);

  const selectedTabInputs =
    tabIndex === 0 ? config.inputs.otp : config.inputs.usernameAndPass;

  const initialFormValues = useMemo(() => {
    const initFormValues = {};

    selectedTabInputs.forEach((input) => {
      initFormValues[input.id] = "";
    });

    return initFormValues;
  }, [selectedTabInputs]);

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
      } else {
        //Show errors
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendOtpHandler = () => {
    setShowOtpSendCode(false);
    console.log("Dummy!!! otp send in SMS");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // Update the input values based on the input's name
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <Formik initialValues={initialFormValues} innerRef={formikRef}>
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
                  <LoginOption isActive={tabIndex === index}>{tab}</LoginOption>
                  {index !== tabs.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </LoginOptions>

            <LoginInputs>
              <ButtonsContainer>
                <Button onClick={loginHandler}>
                  {buttons.usernameAndPass}
                </Button>
                <LinkBtn>{buttons.forgotPasswordBtn}</LinkBtn>
              </ButtonsContainer>
            </LoginInputs>
          </LoginsWrapper>
          <Footer>
            <h3>{fotter.title}</h3>
            <p>{fotter.description}</p>
          </Footer>
        </ContainerRight>
      </Formik>
      <ContainerLeft></ContainerLeft>
    </Wrapper>
  );
};

export default Login;
