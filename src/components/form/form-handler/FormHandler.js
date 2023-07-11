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
} from "./FormHandler.styles";
import { FormFooter } from "../form-footer/FormFooter";
import { ButtonWrapper } from "../../button/Button.styles";
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
    formikRef.current.resetForm();
    setInputValues(initialFormValues);
    formikRef.current.setErrors({});
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
        </div>
        <FormFooter config={config.footer} />
      </FormWrapper>
    </Formik>
  );
};

export default FormHandler;
