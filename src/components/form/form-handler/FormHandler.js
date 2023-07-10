import { ErrorMessage, Formik } from "formik";
import React, { useRef } from "react";
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
  inputValues,
  setInputValues,
}) => {
  const formikRef = useRef(null);

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the input value in the state
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={inputValues}
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
                        <div>
                          <Select
                            options={input.optionsList}
                            placeHolder={input.placeHolder}
                            action={action}
                          />
                          <ErrorMessage
                            name={input.name}
                            component="div"
                            className="error"
                          />
                        </div>
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
                                value={inputValues[input.name]} // Pass the corresponding value from state
                                onChange={handleChange} // Add onChange using handleChange
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
