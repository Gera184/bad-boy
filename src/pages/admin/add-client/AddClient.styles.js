import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: #fff;
  overflow: hidden;
  border-radius: 1rem;
  font-family: "Assistant", Sans-serif;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 1150px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`;
export const Heading = styled.h2``;

export const CloseBtn = styled.button`
  all: unset;
  font: inherit;
  cursor: pointer;
  height: 1.5rem;
  padding: 0.25rem;
  aspect-ratio: 1;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FileInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  font-size: small;
  color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  padding-top: 2rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  border: 2px dashed rgba(36, 160, 255, 0.5);
  background-color: rgba(36, 160, 255, 0.25);
  border-radius: 1rem;
  margin: 0 1.4rem;

  input {
    color: transparent;
    visibility: hidden;
    height: 1px;
  }
  &::before {
    content: "Choose file";
    z-index: 100;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: blue;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
  }
`;
export const FileError = styled.div`
  color: red;
  font-size: small;
`;

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  font-size: small;
  margin: 1rem 1.4rem;
  gap: 0.25rem;
  input,
  textarea {
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  input {
    display: flex;
    flex: 1;
  }
  textarea {
    flex: 1;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: goldenrod;
  width: 100%;
  padding: 1rem;
  border: 0;
  color: #fff;
  font-size: large;
  cursor: pointer;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Error = styled.div`
  color: red;
  font-size: small;
`;
