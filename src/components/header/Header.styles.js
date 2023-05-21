/* eslint-disable default-case */
import styled from "styled-components";

export const ContentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: relative;
  background-color: #e9f0f9;
  border-bottom: 1px solid black;
  @media (max-width: 700px) {
    /* background-color: white; */
    height: 80px;
    display: flex;
    justify-content: center;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: #e9f0f9;

  ::placeholder {
    text-align: right;
    color: #b3bbc4;
  }
`;

export const DeatilsWrapper = styled.div`
  width: 100%;

  text-align: center;
`;

export const Deatils = styled.p`
  color: ${(props) => (props.text === "mainText" ? "#525A68" : "#B3BBC4")};
`;

export const Container = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  width: 100%;

  ${(props) => {
    switch (props.container) {
      case "left":
        return `
        display:flex;
        align-items:center;
        padding-left: 37px;
    `;
      case "right":
        return `
        display:flex;
        padding-right: 68px;
       }`;
    }
  }}
`;

export const HeaderLogo = styled.div`
  background: #15233d;
  border-radius: 10px;
  width: 64px;
  height: 64px;
`;

export const MobileHeader = styled.div`
  font-size: 45px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  /* background-color: white; */
  .logo-img {
    padding: 5px;
    height: 8%;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileMenuToggleBtn = styled.div`
  font-size: 45;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
`;

export const MobileSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #15233d;
`;

export const MobileSearchBtn = styled.button``;
export const BellWrapper = styled.div`
  margin-left: auto;
  margin-right: 3rem;
`;
export const MobileSearchControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const MobileSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;
export const MobileSearchInput = styled.input`
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  padding: 4px 8px;

  &:focus {
    outline: none;
  }

  border-bottom: 2px solid white;
`;
