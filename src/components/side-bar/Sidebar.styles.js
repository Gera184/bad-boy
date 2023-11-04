<<<<<<< HEAD
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

const ToggleButton = styled.button`
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
=======
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 100%;
`;

export const SidebarMain = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  font-size: 16px;
`;

export const SidebarButtonsWrapper = styled.div`
  display: flex;
`;

export const SidebarButtons = styled.ul`
  padding: 0;
`;
export const SidebarButton = styled.li`
  list-style: none;
  line-height: 45px;
  padding: 0 10px 0 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 40px;
  }
`;
export const SidebarButtonLink = styled(NavLink)`
  height: 45px;
  display: flex;
  gap: 10px;
`;

export const SidebarBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 67px;
`;

export const MobSidebarCloseBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;
>>>>>>> 9a369c5 (remove conffeti)
