import React, { useState } from "react";
import {
  OptionItem,
  SelectDropdown,
  SelectInput,
  SelectWrapper,
} from "./Select.styles";
import arrowDown from "../../assets/icons/arrowDown.svg";

const Select = ({
  options,
  placeHolder,
  action,
  filterKey,
  handleChange,
  name,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    handleChange(event);
  };

  const handleOptionClick = (option) => {
    const selectedOption = option[filterKey];

    // Create a synthetic event object with the name and value
    const event = {
      target: {
        name: name,
        value: selectedOption,
      },
    };

    action(option, name);
    handleChange(event);

    setIsOpen(false);
  };

  const filteredOptions = options?.filter((option) =>
    option[filterKey]?.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <SelectWrapper>
      <SelectInput
        type="text"
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          // Delay closing the dropdown to allow option selection
          setTimeout(() => {
            setIsOpen(false);
          }, 200);
        }}
      />
      <img onClick={() => setIsOpen(true)} src={arrowDown} alt="arrowDown" />
      {isOpen && (
        <SelectDropdown>
          {filteredOptions?.map((option, index) => {
            return (
              <OptionItem
                key={index}
                name={name}
                onClick={() => handleOptionClick(option)}
              >
                {option[filterKey]}
              </OptionItem>
            );
          })}
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};

export default Select;
