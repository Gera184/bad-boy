import React, { useState } from "react";
import {
  OptionItem,
  SelectDropdown,
  SelectInput,
  SelectWrapper,
} from "./Select.styles";
import arrowDown from "../../assets/icons/arrowDown.svg";

const Select = ({ options, placeHolder, action, filterKey }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    const selectedKey = option[filterKey];
    action(option);

    setSearchTerm(selectedKey);
    setIsOpen(false);
  };

  const filteredOptions = options?.filter((option) =>
    option[filterKey]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SelectWrapper>
      <SelectInput
        type="text"
        placeholder={placeHolder}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
      />
      <img src={arrowDown} alt="arrowDown" />
      {isOpen && (
        <SelectDropdown>
          {filteredOptions?.map((option, index) => (
            <OptionItem key={index} onClick={() => handleOptionClick(option)}>
              {option[filterKey]}
            </OptionItem>
          ))}
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};

export default Select;
