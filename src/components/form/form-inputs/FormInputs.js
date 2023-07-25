import React from "react";
import Select from "../../select/Select";
import { useFormikContext } from "formik";
import {
  CheckboxWrapper,
  IconContainer,
  InputContainer,
  InputWrapper,
  Label,
  PaymentStyledSelect,
  StyledInput,
} from "../form-handler/FormHandler.styles";
import X from "../../../assets/icons/X.svg";

export const FormInputs = ({
  title,
  action,
  inputValues,
  handleChange,
  handleFocus,
}) => {
  const { errors, touched } = useFormikContext();
  let filterKey = null;

  return (
    <>
      {title.inputs.map((input, inputIndex) => {
        const error = errors[input.name];
        const touch = touched[input.name];
        const hasError = error && touch;
        const showLabel = inputValues[input.name].value.trim() !== "";
        const showPlaceHolder = inputValues[input.name].value.trim() === "";

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
              input.name === "paymentNumber" ? (
                <InputWrapper>
                  <Label>{input.label} </Label>
                  <PaymentStyledSelect
                    as="select"
                    name={input.name}
                    value={inputValues[input.name].value} // Pass the corresponding value from state
                    onChange={handleChange} // Add onChange using handleChange
                  >
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </PaymentStyledSelect>
                </InputWrapper>
              ) : (
                <InputWrapper>
                  <Label visible={showLabel}>{input.label} </Label>
                  <Select
                    options={input.optionsList}
                    value={inputValues[input.name].value} // Pass the corresponding value from state
                    action={action}
                    filterKey={filterKey}
                    name={input.name}
                    placeHolder={showPlaceHolder ? input.placeHolder : ""}
                    handleChange={handleChange}
                    error={hasError ? "error" : ""}
                  />
                </InputWrapper>
              )
            ) : (
              <>
                {input.type === "checkbox" ? (
                  <CheckboxWrapper>
                    <StyledInput
                      checked={inputValues[input.name].value} // Use checked prop for checkbox inputs
                      type={input.type}
                      name={input.name}
                      onChange={handleChange}
                    />
                    <Label visible={true}>{input.label} </Label>
                  </CheckboxWrapper>
                ) : (
                  <InputWrapper>
                    <Label visible={showLabel}>{input.label} </Label>
                    <InputContainer>
                      <StyledInput
                        type={input.type}
                        name={input.name}
                        value={inputValues[input.name].value} // Pass the corresponding value from state
                        onChange={handleChange} // Add onChange using handleChange
                        label={input.label}
                        placeholder={showPlaceHolder ? input.placeHolder : ""}
                        error={hasError ? "error" : ""}
                        readOnly={inputValues[input.name].readOnly}
                        onFocus={() => handleFocus(input.name)} // Call handleFocus when input is focused
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
