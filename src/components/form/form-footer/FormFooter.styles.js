import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #e7e6e6;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 100px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;

export const StatusLabel = styled.label`
  display: flex;
  color: ${(props) =>
    props.color ? props.color : "var(--text-blue, #0b1937)"};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  text-align: right;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const StatusInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 130px;
  ::placeholder {
    color: var(--text-blue, #0b1937);
  }
`;

export const Status = styled.span`
  color: ${(props) =>
    props.color ? props.color : "var(--text-blue, #0B1937)"};
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 2px;

  display: flex;
  align-items: center;
  gap: 5px;
`;
