import React, { useState } from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Wrapper,
  ContentWrapper,
  SidebarWrapper,
  Content,
  FooterWrapper,
} from "./App.styles";
import { Footer } from "./pages/footer/Footer";
import { AppRoutes } from "./routes";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSideBar = () => {
    if (!isMobile) {
      setIsOpen(!isOpen);
    }
  };
  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
    setIsOpen(true);
  };

  const closeSideNav = () => {
    setIsOpen(false);
    setIsMobile(false);
  };

  return (
    <Router>
      <Wrapper>
        <SidebarWrapper isMobile={isMobile} width={isOpen ? "25%" : "80px"}>
          <SideBar
            toggleSideBar={toggleSideBar}
            toggleMobileNav={toggleMobileNav}
            closeSideNav={closeSideNav}
            isOpen={isOpen}
            isMobile={isMobile}
          />
        </SidebarWrapper>
        <ContentWrapper>
          <Header />
          <Content>
            <Routes>
              {AppRoutes().map((route) => {
                return (
                  <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                  />
                );
              })}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Content>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};
