import React, { useEffect } from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Wrapper, ContentWrapper, Content } from "./App.styles";
import { AppRoutes } from "./routes.js";

export const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <SideBar />
        <ContentWrapper>
          <Content>
            <Routes>
              {AppRoutes().map((route) => (
                <Route
                  key={route.route}
                  exact
                  path={route.route}
                  element={route.element}
                />
              ))}
              {/* default route */}
              <Route path="*" element={<Navigate to="/CheckPurchase" />} />
            </Routes>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};
