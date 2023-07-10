import { ErrorMessage, Formik } from "formik";
import React, { useMemo, useRef } from "react";
import {
  FormWrapper,
  StyledForm,
  StyledInput,
  Title,
  TitleContainer,
  TitleWrapper,
  SectionContainer,
  HeaderContainer,
  Label,
} from "./FormHandler.styles";
import { FormFooter } from "../form-footer/FormFooter";
import { ButtonWrapper } from "../../button/Button.styles";
import Select from "../../select/Select";

const FormHandler = ({
  handleSubmit,
  validate,
  config,
  children,
  action = null,
  width,
}) => {
  const formikRef = useRef(null);

  const initialFormValues = useMemo(() => {
    const formValues = {};

    config.sections.forEach((section) => {
      section.inputs.forEach((input) => {
        formValues[input.name] = "";
      });
    });

    return formValues;
  }, [config]);

  // const generateOptions = useMemo(() => {
  //   return (optionsList) => {
  //     const options = [];

  //     for (let index = 0; index < optionsList?.length; index++) {
  //       const { value, text } = optionsList[index];

  //       options.push(
  //         <option key={index} value={value}>
  //           {text}
  //         </option>
  //       );
  //     }

  //     return options;
  //   };
  // }, []);

  const resetFormInputs = () => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={initialFormValues}
    >
      <FormWrapper>
        <div>
          <HeaderContainer>
            <Title>{config.header.title}</Title>
            <ButtonWrapper type="button" onClick={resetFormInputs}>
              {/* <img src={button.src} alt={button.alt} /> */}
              עסקה חדשה
            </ButtonWrapper>
          </HeaderContainer>
          <SectionContainer>
            {config.sections.map((title, index) => (
              <React.Fragment key={index}>
                <TitleWrapper isFirst={index === 0}>
                  <TitleContainer>
                    <Title>{title.title}</Title>
                  </TitleContainer>
                </TitleWrapper>
                <StyledForm width={width}>
                  {title.inputs.map((input, inputIndex) => (
                    <div key={inputIndex}>
                      {input.type === "select" ? (
                        <>
                          <Select
                            name={input.name}
                            options={input.optionsList}
                            placeHolder={input.placeHolder}
                            action={action}
                          />
                          <ErrorMessage
                            name={input.name}
                            component="div"
                            className="error"
                          />
                        </>
                      ) : (
                        <>
                          {input.type === "checkbox" ? (
                            <>
                              <StyledInput
                                type={input.type}
                                name={input.name}
                              />
                              <Label>{input.placeHolder} </Label>
                              <ErrorMessage
                                name={input.name}
                                component="div"
                                className="error"
                              />
                            </>
                          ) : (
                            <>
                              <StyledInput
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeHolder}
                                label={input.label}
                              />
                              <ErrorMessage
                                name={input.name}
                                component="div"
                                className="error"
                              />
                            </>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </StyledForm>
              </React.Fragment>
            ))}
          </SectionContainer>
          <SectionContainer>{children}</SectionContainer>
        </div>
        <FormFooter
          handleSubmit={handleSubmit}
          validate={validate}
          config={config.footer}
        />
      </FormWrapper>
    </Formik>
  );
};

export default FormHandler;
