import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
`;

export const FooterText = styled.p`
  color: #333;
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LtdText = styled.span`
  font-weight: bold;
`;
