import React, { useState } from "react";
import Select from "../../select/Select";
import { ErrorMessage, useFormikContext } from "formik";
import {
  CheckboxWrapper,
  ErrorMessageText,
  InputWrapper,
  Label,
  StyledInput,
} from "../form-handler/FormHandler.styles";

export const FormInputs = ({ title, action, inputValues, handleChange }) => {
  const { errors, touched } = useFormikContext();

  let filterKey = null;
  return (
    <>
      {title.inputs.map((input, inputIndex) => {
        const error = errors[input.name];
        const touch = touched[input.name];

        if (
          input.type === "select" &&
          input.optionsList &&
          input.optionsList.length > 0
        ) {
          const optionsListKeys = Object.keys(input.optionsList[0]);
          const keyIncluded = optionsListKeys.find((key) =>
            key.toLocaleLowerCase().includes("name")
          );

          if (keyIncluded) {
            filterKey = keyIncluded;
          }
        }

        return (
          <React.Fragment key={inputIndex}>
            {input.type === "select" ? (
              <InputWrapper>
                <Label>{input.label} </Label>
                <Select
                  options={input.optionsList}
                  value={inputValues[input.name]} // Pass the corresponding value from state
                  action={action}
                  filterKey={filterKey}
                  name={input.name}
                  handleChange={handleChange}
                  error={error && touch ? "error" : ""}
                />
                <ErrorMessage
                  name={input.name}
                  component="div"
                  className="error"
                />
              </InputWrapper>
            ) : (
              <>
                {input.type === "checkbox" ? (
                  <CheckboxWrapper>
                    <StyledInput
                      checked={inputValues[input.name]} // Use checked prop for checkbox inputs
                      type={input.type}
                      name={input.name}
                      onChange={handleChange}
                    />
                    <Label>{input.label} </Label>
                    <ErrorMessage
                      name={input.name}
                      component="div"
                      className="error"
                    />
                  </CheckboxWrapper>
                ) : (
                  <InputWrapper>
                    <Label>{input.label} </Label>
                    <StyledInput
                      type={input.type}
                      name={input.name}
                      value={inputValues[input.name]} // Pass the corresponding value from state
                      onChange={handleChange} // Add onChange using handleChange
                      label={input.label}
                      error={error && touch ? "error" : ""}
                    />
                    <ErrorMessage
                      name={input.name}
                      render={(msg) => (
                        <ErrorMessageText>
                          {/* Custom error message based on the error */}
                          {error && touch && <span>הערך אינו תקין</span>}
                        </ErrorMessageText>
                      )}
                    />
                  </InputWrapper>
                )}
              </>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
