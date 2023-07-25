import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import {
  FormWrapper,
  StyledForm,
  Title,
  TitleContainer,
  TitleWrapper,
  SectionContainer,
  HeaderContainer,
  SectionWrapper,
  Spacer,
} from "./FormHandler.styles";
import { FormFooter } from "../form-footer/FormFooter";
import Button from "../../button/Button.js";
import { FormInputs } from "../form-inputs/FormInputs";

const FormHandler = ({
  handleSubmit,
  validate,
  config,
  children,
  action = null,
  width,
  inputValues,
  setInputValues,
  response,
}) => {
  const formikRef = useRef(null);
  const { initFormValues, initInputValues } = inputValues;

  const resetFormInputs = () => {
    formikRef.current.resetForm();
    // setInputValues(initialFormValues);
    formikRef.current.setErrors({});
  };

  const handleFocus = (fieldName) => {
    formikRef.current.setFieldError(fieldName, ""); // Clear the error for the specified field
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    // Update the value inside initInputValues
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      initInputValues: {
        ...prevInputValues.initInputValues,
        [name]: {
          ...prevInputValues.initInputValues[name],
          value: inputValue,
        },
      },
    }));
  };

  useEffect(() => {
    // Iterate over the inputValues and set the field values
    const fieldValues = Object.keys(inputValues.initInputValues).reduce(
      (values, name) => {
        values[name] = inputValues.initInputValues[name].value;
        return values;
      },
      {}
    );

    formikRef.current.setValues(fieldValues);
  }, [inputValues]);

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={initFormValues} // Use inputValues as initialValues
      validateOnChange={false}
      validateOnBlur={false}
    >
      <FormWrapper>
        <Spacer>
          <SectionWrapper>
            <HeaderContainer>
              <Title>{config.header.title}</Title>
            </HeaderContainer>
            <SectionContainer>
              {config.sections.map((title, index) => (
                <React.Fragment key={index}>
                  <TitleWrapper isFirst={index === 0}>
                    <TitleContainer>
                      <Title>{title.title}</Title>
                      {index === 0 && (
                        <Button type="button" onClick={resetFormInputs}>
                          {/* <img src={button.src} alt={button.alt} /> */}
                          עסקה חדשה
                        </Button>
                      )}
                    </TitleContainer>
                  </TitleWrapper>
                  <StyledForm width={width}>
                    <FormInputs
                      title={title}
                      action={action}
                      inputValues={initInputValues}
                      handleChange={handleChange}
                      handleFocus={handleFocus}
                    />
                  </StyledForm>
                </React.Fragment>
              ))}
            </SectionContainer>
            <SectionContainer>{children}</SectionContainer>
          </SectionWrapper>
        </Spacer>

        <FormFooter response={response} />
      </FormWrapper>
    </Formik>
  );
};

export default FormHandler;
