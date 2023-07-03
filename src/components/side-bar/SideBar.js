import React from "react";
import { routes } from "../../routes";
import {
  Wrapper,
  SidebarMain,
  SidebarButtons,
  SidebarButton,
  SidebarButtonLink,
  SidebarBottom,
  SidebarButtonLinkContainer,
  SidebarButtonLogout,
} from "./Sidebar.styles";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import headset from "../../assets/icons/Headset.svg";
import collapseArrow from "../../assets/icons/Collapse_Arrow.svg";

const SideBar = () => {
  const { language } = useSelector((lang) => lang);

  const location = useLocation();
  const activeRoute = location.pathname;

  return (
    <Wrapper>
      <SidebarMain>
        <SidebarButtons>
          {routes.map((li, index) => {
            return (
              <SidebarButton key={index}>
                <SidebarButtonLinkContainer active={li.route === activeRoute}>
                  <SidebarButtonLink to={li.path}>{li.title}</SidebarButtonLink>
                </SidebarButtonLinkContainer>
              </SidebarButton>
            );
          })}
        </SidebarButtons>
        <SidebarBottom>
          <img src={collapseArrow} alt="collapseArrow" />
          <img src={headset} alt="headset" />
          <SidebarButtonLogout>יצירת קשר ERN</SidebarButtonLogout>
        </SidebarBottom>
      </SidebarMain>
    </Wrapper>
  );
};

export default SideBar;
