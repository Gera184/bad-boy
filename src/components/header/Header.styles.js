import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  z-index: 1;
  background-color: #f9f9f9;
`;

export const ContainerLeft = styled.div`
  align-items: center;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
`;
export const ContainerRight = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const RetailerLabel = styled.p``;

export const IconAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    height: 30px;
    width: 30px;
  }
  p {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
  }
  select {
    border: none;
    background-color: transparent;
  }
`;

export const LogoImage = styled.div`
  img {
    height: 37px;
    width: 93px;
  }
`;
