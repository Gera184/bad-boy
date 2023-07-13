import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectInput = styled.input`
  width: 200px;
  border: none;
  border-bottom: 1px solid #8c8c8c;
`;

export const SelectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 9999;
`;

export const OptionItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
