import { ErrorMessage, Formik, Form } from "formik";
import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  Title,
  TitleContainer,
  TitleWrapper,
} from "./FormHandler.styles";

const FormHandler = ({
  initialValues,
  handleSubmit,
  validate,
  config,
  children,
  generateOptions = null,
  width = "100%",
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
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
                      {generateOptions ? (
                        <StyledSelect
                          as="select"
                          name={input.placeHolder}
                          defaultValue=""
                          placeholder="Select an option"
                        >
                          {generateOptions(1, 10)}
                        </StyledSelect>
                      ) : null}

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
              {children}
            </StyledForm>
          </React.Fragment>
        ))}
      </Form>
    </Formik>
  );
};

export default FormHandler;
