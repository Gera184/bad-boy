import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background-color: #d3d3d3;

  @media (max-width: 700px) {
    width: 100%;
    overflow: hidden;
    position: absolute;
    height: 70px;
    z-index: 10;
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 5%;
  img {
    object-fit: contain;
    max-width: 90%;
    height: auto;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    padding: 0.75rem 2.5rem;
    height: 70px;
  }
`;

const ToggleButton = styled.button`
  all: unset;
  display: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  @media (max-width: 700px) {
    display: block;
    ${({ isMobile }) =>
      isMobile &&
      `
        opacity: 0;
        z-index:-100;
        visibility: hidden;
        cursor: not-allowed;
        transition: all 0.4s ease-in;
    `}
  }
`;

export const OpenHamburgerBtn = styled(ToggleButton)`
  font-size: 45px;
`;

export const CloseBtn = styled(ToggleButton)`
  font-size: 25px;
`;

export const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  font-size: 16px;
`;

export const SidebarButtons = styled.ul`
  padding: 0;
`;
export const SidebarButton = styled.li`
  list-style: none;
  width: 100%;
`;

export const SidebarButtonLink = styled(NavLink)`
  text-decoration: none;

  color: black;
  /* &.active,
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 40px;
  } */
`;

export const SidebarBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 67px;
`;
