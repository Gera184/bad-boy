import styled from "styled-components";

export const ContentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BellWrapper = styled.div`
  margin-left: auto;
  margin-right: 3rem;
  height: 1.5rem;
  aspect-ratio: 1;
  img {
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderContainerLeft = styled.div`
    align-items: center;
    gap:1rem;
    display: flex;
  justify-content: space-between;
`
export const HeaderContainerRight = styled.div`
    gap:1rem;
    align-items: center;
    display: flex;
  justify-content: space-between;
`
export const RetailerData = styled.p`
`
export const IconAndText = styled.div`
img {
    height:30px;
    width:30px;
}
`
export const LogoImage = styled.div`
img {
    height:37px;
    width:93px;
}
`