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
