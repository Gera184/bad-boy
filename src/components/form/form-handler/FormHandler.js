import { Formik } from "formik";
import React, { useRef } from "react";
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
  initialFormValues,
}) => {
  const formikRef = useRef(null);

  const resetFormInputs = () => {
    formikRef.current.resetForm();
    setInputValues(initialFormValues);
    formikRef.current.setErrors({});
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    // Update the input value in the state
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: inputValue,
    }));

    // Update the formikRef's values manually
    formikRef.current.setFieldValue(name, inputValue);
  };

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={inputValues} // Use inputValues as initialValues
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
                      inputValues={inputValues}
                      handleChange={handleChange}
                    />
                  </StyledForm>
                </React.Fragment>
              ))}
            </SectionContainer>
            <SectionContainer>{children}</SectionContainer>
          </SectionWrapper>
        </Spacer>

        <FormFooter />
      </FormWrapper>
    </Formik>
  );
};

export default FormHandler;
