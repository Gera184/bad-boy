import React from "react";
import { config } from "./config";
import logout from "../../assets/icons/logout.png";
import * as S from "./Sidebar.styles";
import logoOpen from "../../assets/icons/logo-open.png";
import logoClose from "../../assets/icons/logo-close.png";
import { useNavigate } from "react-router-dom";

const SideBar = ({
  toggleSideBar,
  toggleMobileNav,
  closeSideNav,
  isMobile,
  isOpen,
}) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    // Remove user data from local storage
    localStorage.removeItem("user");
    // Redirect to the "/" route
    navigate("/");
    window.location.reload(true);
  };

  return (
    <>
      {isMobile && (
        <S.MobSidebarCloseBtn onClick={toggleMobileNav}>
          &#10005;
        </S.MobSidebarCloseBtn>
      )}

      <S.SidebarHeader>
        {isOpen ? (
          <img src={logoOpen} alt="error" onClick={toggleSideBar} />
        ) : (
          <img src={logoClose} alt="error" onClick={toggleSideBar} />
        )}
      </S.SidebarHeader>
      <S.SidebarMain>
        <S.SidebarButtonsWrapper>
          <S.SidebarButtons>
            {config.map((li, index) => {
              return (
                <S.SidebarButton key={index} onClick={closeSideNav}>
                  <S.SidebarButtonLink style={linkStyle} to={li.path}>
                    <img src={li.icon} alt="error" />

                    {isOpen && <span>{li.title}</span>}
                  </S.SidebarButtonLink>
                </S.SidebarButton>
              );
            })}
          </S.SidebarButtons>
        </S.SidebarButtonsWrapper>
        <S.SidebarBottom>
          <S.SidebarButton onClick={logoutHandler}>
            <S.SidebarButtonLink style={linkStyle}>
              <img src={logout} alt="error" />
              {isOpen && <span>Logout</span>}
            </S.SidebarButtonLink>
          </S.SidebarButton>
        </S.SidebarBottom>
      </S.SidebarMain>
    </>
  );
};

export default SideBar;

const linkStyle = {
  color: "rgba(255, 255, 255, 0.3)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
};
