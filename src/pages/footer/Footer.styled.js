import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  direction: rtl;
  background-color: ${(props) => (props.isMain ? "#333333" : "#f0f0f0")};
  padding: 0.2rem;
  padding-top: ${(props) => (!props.isMain ? "0px" : "1rem")};
  padding-bottom: ${(props) => (!props.isMain ? "0px" : "1rem")};
  text-align: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.isMain ? "1rem" : "0")};
`;

export const FooterText = styled.span`
  color: ${(props) => (props.isMain ? "white" : "#333")};
  font-size: ${(props) => (props.isMain ? "14px" : "16px")};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isMain ? "12px" : "14px")};
  }
`;

export const LtdText = styled.span`
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 7.5rem;
  padding: 0 5rem;
  position: relative;
  margin-top: 2rem;
  color: inherit;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
`;

export const ContactList = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
`;

export const ContactIcon = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: goldenrod;
  }
`;
export const ContactDetails = styled.div`
  font-size: small;
  padding-right: 5px;
`;
