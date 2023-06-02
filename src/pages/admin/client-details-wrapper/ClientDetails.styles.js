import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  direction: rtl;
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DocumentContainer = styled.div`
  flex: 0.75;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 1150px) {
    flex: 0.4;
    height: 70vh;
    flex: 1;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const FilterHeading = styled.h1`
  font-size: xx-large;
  border-bottom: 1px solid black;
`;

export const FilterLabel = styled.label`
  font-size: medium;
  padding: 0.25rem 0.75rem;
  border: 1px solid gold;
  border-radius: 1rem;
  cursor: pointer;
  white-space: nowrap;

  input {
    visibility: hidden;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  ${(props) =>
    props.checked &&
    `
    background-color: goldenrod;
  `}
`;

export const SearchContainer = styled.div`
  display: flex;
  input {
    border-radius: 1rem;
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:focus {
      /* outline: none; */
    }
  }
`;

export const AddBtnWrapper = styled.div`
  button {
    padding: 0.5rem 0.75rem;
    background-color: goldenrod;
    border-radius: 1rem;
    color: #fff;
    border: 0;
    cursor: pointer;
  }
`;

export const DocumentsList = styled.div`
  margin-top: -1.5rem;
  min-height: 10rem;
  flex: 1;
  position: relative;
  overflow: auto;
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Content = styled.div`
  padding: 0.5rem;
  position: absolute;
  left: 0;
  right: 0;
`;

export const ListHeaderWrapper = styled.div`
  display: flex;
`;
export const ListHeaderBtnWrapper = styled.div`
  margin-left: auto;
  display: flex;
  margin-right: 1rem;
  gap: 1rem;

  button {
    all: unset;
    font-size: small;
    text-decoration: underline;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
export const NoContentMsg = styled.div`
  margin: auto;
  font-size: large;
  font-weight: bold;
`;
