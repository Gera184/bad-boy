import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-left: 1px solid #d3d3d3;
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
`;

export const ToggleButton = styled.button`
  all: unset;
  display: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
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
`;

export const SidebarBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 67px;
`;
