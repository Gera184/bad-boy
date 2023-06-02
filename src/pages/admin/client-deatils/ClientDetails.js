import React from "react";
import viewDocIcon from "../../../assets/icons/view-doc.png";
import { formatDateHandler } from "../../../utils/formatDate";

import {
  Action,
  Details,
  Name,
  SelectWrapper,
  Type,
  UtilWrapper,
  Wrapper,
  Option,
} from "./ClientDetails.styles";

function ClientDetails({
  name,
  email,
  phone,
  caseNumber,
  status,
  createdAt,
  checked,
  customerStatus,
  handleSelectChange,
}) {
  const options = [
    { value: "new", label: "New" },
    { value: "not_answered", label: "Not answered" },
    { value: "deal", label: "Deal" },
    { value: "call_back", label: "Call back" },
    { value: "not_relevant", label: "Not relevant" },
    { value: "wrong_number", label: "Wrong number" },
    { value: "hebrew", label: "Hebrew" },
    { value: "russian", label: "Russian" },
    { value: "arabic", label: "Arabic" },
  ];

  const SelectComponent = ({ options, value, onChange }) => (
    <SelectWrapper
      value={value}
      defaultValue={customerStatus}
      onChange={onChange}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectWrapper>
  );

  return (
    <Wrapper>
      <input type="checkbox" checked={checked} />

      <Name>{name}</Name>
      <Type>{email}</Type>
      <Details>{phone} </Details>
      <Details>{caseNumber} </Details>
      <Details>{formatDateHandler(createdAt)} </Details>
      <Action>{status}</Action>
      <SelectComponent options={options} onChange={handleSelectChange} />

      <UtilWrapper>
        <button>
          <img src={viewDocIcon} alt="view" />
        </button>
      </UtilWrapper>
    </Wrapper>
  );
}

export default ClientDetails;
