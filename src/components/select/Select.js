import React, { useEffect, useState } from "react";
import {
  OptionItem,
  SelectDropdown,
  SelectInput,
  SelectWrapper,
} from "./Select.styles";

const Select = ({ name, options, placeHolder, action }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleOptionClick = (option) => {
    action(option);

    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredOptions = options?.filter((option) =>
    option.Name.toLowerCase().includes(searchTerm.toLowerCase())
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
      {isOpen && (
        <SelectDropdown>
          {filteredOptions.map((option, index) => (
            <OptionItem key={index} onClick={() => handleOptionClick(option)}>
              {option.Name}
            </OptionItem>
          ))}
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};

export default Select;
