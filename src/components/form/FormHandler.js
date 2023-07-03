import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";

const FormHandler = ({
  initialValues,
  handleSubmit,
  validate,
  config,
  children,
  generateOptions = null,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <Form>
        {config.map((input, index) => (
          <div key={index}>
            {input.type === "select" ? (
              <>
                {generateOptions ? (
                  <Field
                    as="select"
                    name={input.placeHolder}
                    defaultValue=""
                    placeholder="Select an option"
                  >
                    {generateOptions(1, 10)}
                  </Field>
                ) : null}

                <ErrorMessage
                  name={input.placeHolder}
                  component="div"
                  className="error"
                />
              </>
            ) : (
              <>
                <Field
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
      </Form>
    </Formik>
  );
};

export default FormHandler;
