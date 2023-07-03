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
} from "./Sidebar.styles";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { language } = useSelector((lang) => lang);
  const { checkspurchasetransaction } = language.texts;

  return (
    <Wrapper>
      <SidebarMain>
        <SidebarButtons>
          {routes.map((li, index) => {
            return (
              <SidebarButton key={index}>
                <SidebarButtonLinkContainer>
                  <SidebarButtonLink to={li.path}>{li.title}</SidebarButtonLink>
                </SidebarButtonLinkContainer>
              </SidebarButton>
            );
          })}
        </SidebarButtons>
        {/* <SidebarBottom>
          <SidebarButton>
            <SidebarButtonLink to="/logout"></SidebarButtonLink>
          </SidebarButton>
        </SidebarBottom> */}
      </SidebarMain>
    </Wrapper>
  );
};

export default SideBar;
