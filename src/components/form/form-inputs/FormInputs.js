import React from "react";
import Select from "../../select/Select";
import { ErrorMessage } from "formik";
import { Label, StyledInput } from "../form-handler/FormHandler.styles";

export const FormInputs = ({ title, action, inputValues, handleChange }) => {
  let filterKey = null;
  return (
    <>
      {title.inputs.map((input, inputIndex) => {
        //getting the selected key
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
          <div key={inputIndex}>
            {input.type === "select" ? (
              <div>
                <Select
                  options={input.optionsList}
                  placeHolder={input.placeHolder}
                  action={action}
                  filterKey={filterKey}
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
                    <StyledInput type={input.type} name={input.name} />
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
        );
      })}
    </>
  );
};
