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
