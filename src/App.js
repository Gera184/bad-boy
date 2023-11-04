<<<<<<< HEAD
import React from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Wrapper, ContentWrapper, Content } from "./App.styles";
import { routes } from "./routes.js";

export const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <SideBar />
        <ContentWrapper>
          <Content>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.route}
                  exact
                  path={route.route}
                  element={route.element}
                />
              ))}
              {/* default route */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};
=======
import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Wrapper, ContentWrapper, Content, FooterWrapper } from "./App.styles";
import { Footer } from "./pages/footer/Footer";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <Router>
      <Wrapper>
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
>>>>>>> 9a369c5 (remove conffeti)
