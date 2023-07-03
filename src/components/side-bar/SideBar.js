import React from "react";
import * as S from "./Sidebar.styles";
import { routes } from "../../routes";

const SideBar = () => {
  return (
    <S.Wrapper>
      <S.SidebarHeader>
        <S.OpenHamburgerBtn>&#8801;</S.OpenHamburgerBtn>

        <S.CloseBtn>&#10005;</S.CloseBtn>
      </S.SidebarHeader>

      <S.SidebarMain>
        <S.SidebarButtons>
          {routes.map((li, index) => {
            return (
              <S.SidebarButton key={index}>
                <S.SidebarButtonLink to={li.path}>
                  {li.title}
                </S.SidebarButtonLink>
              </S.SidebarButton>
            );
          })}
        </S.SidebarButtons>
        <S.SidebarBottom>
          <S.SidebarButton>
            <S.SidebarButtonLink to="/logout"></S.SidebarButtonLink>
          </S.SidebarButton>
        </S.SidebarBottom>
      </S.SidebarMain>
    </S.Wrapper>
  );
};

export default SideBar;
