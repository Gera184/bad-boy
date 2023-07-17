import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background: ${(props) =>
    props.background ? props.background : "var(--button-blue, #0053ab)"};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "1px solid black"};

  height: 35px;
  padding: 12px 20px;
  gap: 10px;
  flex-shrink: 0;
  //for the button text

  color: ${(props) =>
    props.textColor ? props.textColor : "var(--white, #fff)"};
  text-align: right;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  img {
    width: 17px;
    height: 15px;
    padding-left: 5px;
  }

  ${(props) =>
    props.disabled &&
    `
      background: var(--disable, #858585);
      cursor: not-allowed;
      color: var(--disable-text, #464646);

    `}
`;
