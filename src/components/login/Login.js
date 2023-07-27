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
import OTPVerification from "./OTPVerification.js";
import { axiosRequest } from "../../utils/axiosRequest";
import { Formik } from "formik";
import * as Yup from "yup";

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
    tabIndex === 0 ? config.inputs.otpSendCode : config.inputs.usernameAndPass;

  const initialFormValues = useMemo(() => {
    const initFormValues = {};

    selectedTabInputs.forEach((input) => {
      initFormValues[input.name] = "";
    });

    return initFormValues;
  }, [selectedTabInputs, tabIndex]);

  const loginHandler = async (values, { setSubmitting, setErrors }) => {
    const { retailerId, username, password } = inputValues;

    try {
      const response = await axiosRequest({
        method: "POST",
        url: "/ErnTransApichannel/Authentication/Login",
        headers: {
          accept: "/",
          userCode: username,
          tokenPublic: null,
        },
        data: {
          manufacturerId: "RNT", //To be defined
          manufacturerVersion: "1",
          retailerId: retailerId,
          userCode: username,
          tokenPublic: null,
          tx: "",
        },
      });

      const responseCode = 200;
      // const { responseCode } = response;
      const { sessionId } = response?.data;

      if (responseCode === 0 && sessionId) {
        dispatch(loginAction(response));

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
            sessionId: sessionId,
            userCode: username,
            posManufacturerId: "RNT",
            posManufacturerVersion: "1",
            retailerId: retailerId,
          },
        });

        const { responseCode } = secondResponse;

        if (responseCode === 0) {
          dispatch(getRetailerParameters(secondResponse));
          navigate("/CheckPurchase");
        }
      } else {
        setErrors({
          username: "Invalid username or password",
          password: "Invalid username or password",
        });
      }
    } catch (error) {
      console.error(error);
    }

    // Call setSubmitting to indicate form submission is complete
    setSubmitting(false);
  };

  const sendOtpHandler = () => {
    setShowOtpSendCode(false);
  };

  const onChangeHandler = (event) => {
    const { name, value, type } = event.target;

    switch (type) {
      case "number":
        // Check if the value is a valid number and is smaller than or equal to six digits

        if (!isNaN(value) && value.length <= 6) {
          setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
          }));

          formikRef.current.setFieldValue(name, value);
        }
        break;
      default:
        // For other fields like "text," "password," etc., simply update the input values
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          [name]: value,
        }));

        formikRef.current.setFieldValue(name, value);
        break;
    }
  };
  console.log(formikRef);
  const usernameAndPassSchema = Yup.lazy((values) => {
    // Define the validation schema based on the current values

    return Yup.object().shape({
      retailerid: Yup.string().min(6, "Too Short!"),
      username: Yup.string()
        .min(7, "Too Short!")
        .max(14, "Too Long!")
        .required("Required")
        .matches(/^[A-Za-z]+$/, "Only English letters are allowed"),
      password: Yup.string()
        .min(7, "Too Short!")
        .max(14, "Too Long!")
        .required("Required")
        .matches(
          /[A-Za-z]/,
          "Password must contain at least one letter (A-Z or a-z)"
        ),
    });
  });

  const onBlurHandler = (event) => {
    const { name } = event.target;
    formikRef.current.setFieldTouched(name, true, true);
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    formikRef.current.setFieldTouched(name, false, false);
  };

  // Update the initial values of the Formik form each time the tabIndex changes
  useEffect(() => {
    formikRef.current.setValues(initialFormValues);
  }, [tabIndex]);

  return (
    <Wrapper>
      <Formik
        onSubmit={loginHandler}
        validationSchema={usernameAndPassSchema}
        initialValues={initialFormValues}
        innerRef={formikRef}
      >
        {({ errors, touched }) => (
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
                {showOtpSendCode ? (
                  <>
                    {inputs.otpSendCode.map((input, index) => (
                      <FieldWrapper key={input.name}>
                        <Label>{input.label}</Label>
                        <Input
                          name={input.name} // Set the name attribute for the input
                          type={input.type}
                          onChange={onChangeHandler}
                          value={inputValues[input.name] || ""} // Set the value from the inputValues object
                        />
                      </FieldWrapper>
                    ))}
                    <ButtonsContainer>
                      <Button onClick={sendOtpHandler}>
                        {buttons.otpSendCode}
                      </Button>
                    </ButtonsContainer>
                  </>
                ) : (
                  <OTPVerification />
                )}
              </LoginInputs>
              <LoginInputs>
                {inputs.usernameAndPass.map((input, index) => (
                  <FieldWrapper key={input.name}>
                    <Label>{input.label}</Label>
                    <Input
                      name={input.name} // Set the name attribute for the input
                      type={input.type}
                      onChange={onChangeHandler}
                      value={inputValues[input.name] || ""} // Set the value from the inputValues object
                      onFocus={onFocusHandler}
                      onBlur={onBlurHandler}
                    />
                    {/* Show error message only if the field has been touched and has an error */}
                    {errors[input.name] && touched[input.name] && (
                      <div>{errors[input.name]}</div>
                    )}
                  </FieldWrapper>
                ))}
                <ButtonsContainer>
                  <Button type="submit">{buttons.usernameAndPass}</Button>
                  <LinkBtn>{buttons.forgotPasswordBtn}</LinkBtn>
                </ButtonsContainer>
              </LoginInputs>
            </LoginsWrapper>
            <Footer>
              <h3>{fotter.title}</h3>
              <p>{fotter.description}</p>
            </Footer>
          </ContainerRight>
        )}
      </Formik>
      {/* <ContainerLeft></ContainerLeft> */}
    </Wrapper>
  );
};

export default Login;
