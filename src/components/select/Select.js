import React, { useState, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import {
  SelectWrapper,
  SelectInput,
  SelectDropdown,
  OptionItem,
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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

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

    action(selectedOption, name, option);
    handleChange(event);

    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const itemCount = filteredOptions?.length;

    // Check if the list is open
    if (isOpen) {
      switch (key) {
        case "ArrowUp":
          // Handle moving up in the list
          event.preventDefault();
          moveHighlight(-1, itemCount);
          break;
        case "ArrowDown":
          // Handle moving down in the list
          event.preventDefault();
          moveHighlight(1, itemCount);
          break;
        case "Enter":
          // Handle selecting the highlighted option
          event.preventDefault();
          if (highlightedIndex !== -1) {
            handleOptionClick(filteredOptions[highlightedIndex]);
          }
          break;
        case "Escape":
          // Close the dropdown on pressing Escape key
          setIsOpen(false);
          break;
        default:
          break;
      }
    } else {
      // Open the dropdown on pressing ArrowDown key
      if (key === "ArrowDown") {
        setIsOpen(true);
      }
    }
  };

  const moveHighlight = (offset, itemCount) => {
    setHighlightedIndex((prevIndex) => {
      let newIndex = prevIndex + offset;

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= itemCount) {
        newIndex = itemCount - 1;
      }

      return newIndex;
    });
  };

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
        highlighted={index === highlightedIndex}
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
        onKeyDown={handleKeyDown} // Add the onKeyDown event handler to SelectInput
        tabIndex={0} // This ensures the SelectInput can receive focus and capture key events
      />

      <img onClick={() => setIsOpen(true)} src={arrowDown} alt="arrowDown" />
      {isOpen && (
        <SelectDropdown ref={dropdownRef}>
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
