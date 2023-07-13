import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
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

export const CustomTooltip = styled(Tooltip)`
  z-index: 1;
  width: 254px;
  height: 78px;
  border-radius: 5px;
  background: var(--text-blue, #0b1937);

  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
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
  padding-top: 5rem;
  list-style: none;
`;
export const SidebarButton = styled.li`
  width: 137px;
  height: 42px;
  padding: 11px 15px 10px 15px;
`;
export const SidebarButtonLinkContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  border: 1px solid #a69f9f;
  background-color: ${(props) =>
    props.active ? "var(--button-blue, #0053ab)" : "var(--but-bg, #E5EEF7)"};
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const SidebarButtonLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;

  &.active {
    color: white;
  }
`;

export const SidebarButtonLogout = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
`;

export const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  gap: 0.3rem;
  border-top: 1px solid #d8d8d8;
  img {
    height: 20px;
    width: 20px;
  }
`;
