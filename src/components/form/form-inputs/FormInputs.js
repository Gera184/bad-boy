import React from "react";
import Select from "../../select/Select";
import { useFormikContext } from "formik";
import {
  CheckboxWrapper,
  IconContainer,
  InputContainer,
  InputWrapper,
  Label,
  StyledInput,
} from "../form-handler/FormHandler.styles";
import X from "../../../assets/icons/X.svg";

export const FormInputs = ({ title, action, inputValues, handleChange, ref }) => {
  const { errors, touched } = useFormikContext();
  let filterKey = null;
  return (
    <>
      {title.inputs.map((input, inputIndex) => {
        const error = errors[input.name];
        const touch = touched[input.name];
        const hasError = error && touch;

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
                  error={hasError ? "error" : ""}
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
                  </CheckboxWrapper>
                ) : (
                  <InputWrapper>
                    <Label>{input.label} </Label>
                    <InputContainer>
                      <StyledInput
                        type={input.type}
                        name={input.name}
                        value={inputValues[input.name]} // Pass the corresponding value from state
                        onChange={handleChange} // Add onChange using handleChange
                        label={input.label}
                        
                        
                        readOnly={input.readOnly}
                        ref={ref}

                        error={hasError ? "error" : ""}
                      />

                      <IconContainer>
                        {hasError && <img src={X} alt="Error Icon" />}
                      </IconContainer>
                    </InputContainer>
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
