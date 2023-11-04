<<<<<<< HEAD
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
=======
import React from "react";
import { config } from "./config";
import logout from "../../assets/icons/logout.png";
import * as S from "./Sidebar.styles";
import logo2 from "../../assets/icons/logo2.png";
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
          <img
            style={{ height: "80px" }}
            src={logo2}
            alt="error"
            onClick={toggleSideBar}
          />
        ) : (
          <img
            style={{ height: "55px" }}
            src={logo2}
            alt="error"
            onClick={toggleSideBar}
          />
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

                    {isOpen && (
                      <span style={{ color: "white" }}>{li.title}</span>
                    )}
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
              {isOpen && <span>התנתקות</span>}
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
>>>>>>> 9a369c5 (remove conffeti)
