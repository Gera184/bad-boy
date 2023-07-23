import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
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

  //react-window library is used to render a virtualized list of options.
  //The List component from react-window replaces the filteredOptions?.map function, and the Row component is defined to render each option.
  //By implementing virtualization, the Select component will render efficiently,
  //even with a large number of options, as only the visible options will be rendered at any given time
  const filteredOptions = options?.filter((option) =>
    option[filterKey]?.toLowerCase().includes(value.toLowerCase())
  );

  const Row = ({ index, style }) => {
    const option = filteredOptions[index];

    return (
      <OptionItem
        style={style}
        name={name}
        onClick={() => handleOptionClick(option)}
      >
        {option[filterKey]}
      </OptionItem>
    );
  };

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
          setTimeout(() => {
            setIsOpen(false);
          }, 200);
        }}
        required
      />

      <img onClick={() => setIsOpen(true)} src={arrowDown} alt="arrowDown" />
      {isOpen && (
        <SelectDropdown>
          <List
            height={200} // Adjust the height as needed
            itemCount={filteredOptions?.length}
            itemSize={40} // Adjust the item height as needed
            width="100%"
          >
            {Row}
          </List>
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};

export default Select;
