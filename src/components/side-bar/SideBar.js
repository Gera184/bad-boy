import React from "react";
import { routes } from "../../routes";
import {
  Wrapper,
  SidebarHeader,
  OpenHamburgerBtn,
  CloseBtn,
  SidebarMain,
  SidebarButtons,
  SidebarButton,
  SidebarButtonLink,
  SidebarBottom,
} from "./Sidebar.styles";

const SideBar = () => {
  return (
    <Wrapper>
      <SidebarHeader>
        <OpenHamburgerBtn>&#8801;</OpenHamburgerBtn>

        <CloseBtn>&#10005;</CloseBtn>
      </SidebarHeader>

      <SidebarMain>
        <SidebarButtons>
          {routes.map((li, index) => {
            return (
              <SidebarButton key={index}>
                <SidebarButtonLink to={li.path}>{li.title}</SidebarButtonLink>
              </SidebarButton>
            );
          })}
        </SidebarButtons>
        <SidebarBottom>
          <SidebarButton>
            <SidebarButtonLink to="/logout"></SidebarButtonLink>
          </SidebarButton>
        </SidebarBottom>
      </SidebarMain>
    </Wrapper>
  );
};

export default SideBar;
