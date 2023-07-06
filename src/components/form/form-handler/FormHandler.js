import { ErrorMessage, Formik, Form } from "formik";
import React, { useMemo } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  Title,
  TitleContainer,
  TitleWrapper,
} from "./FormHandler.styles";

const FormHandler = ({
  handleSubmit,
  validate,
  config,
  children,
  width = "100%",
}) => {
  //UseMemo is a React Hook that allows you to memoize a value or function, optimizing performance by preventing unnecessary recalculations or re-rendering.
  const generateOptions = useMemo(() => {
    return (optionsList) => {
      const options = [];

      for (let index = 0; index < optionsList.length; index++) {
        const { value, text } = optionsList[index];

        options.push(
          <option key={index} value={value}>
            {text}
          </option>
        );
      }

      return options;
    };
  }, []);

  const initialFormValues = useMemo(() => {
    const formValues = {};

    config.forEach((section) => {
      section.inputs.forEach((input) => {
        formValues[input.placeHolder] = "";
      });
    });

    return formValues;
  }, []);

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={initialFormValues}
    >
      <Form>
        {config.map((title, index) => (
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
                      <StyledSelect
                        as="select"
                        name={input.placeHolder}
                        defaultValue=""
                        placeholder="Select an option"
                      >
                        {generateOptions(input.optionsList)}
                      </StyledSelect>

                      <ErrorMessage
                        name={input.placeHolder}
                        component="div"
                        className="error"
                      />
                    </>
                  ) : (
                    <>
                      <StyledInput
                        type={input.type}
                        name={input.placeHolder}
                        placeholder={input.placeHolder}
                        required
                      />
                      <ErrorMessage
                        name={input.placeHolder}
                        component="div"
                        className="error"
                      />
                    </>
                  )}
                </div>
              ))}
            </StyledForm>
          </React.Fragment>
        ))}
        {children}
      </Form>
    </Formik>
  );
};

export default FormHandler;
