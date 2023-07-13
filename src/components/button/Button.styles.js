import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background: var(--button-blue, #0053ab);
  height: 35px;
  padding: 12px 20px;
  gap: 10px;
  flex-shrink: 0;
  //for the button text
  color: #fff;
  text-align: right;
  font-size: 14px;

  img {
    width: 17px;
    height: 15px;
    padding-left: 5px;
  }
`;
