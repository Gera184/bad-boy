import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper, ContentWrapper, Content } from "./App.styles";
import { AppRoutes } from "./routes.js";
import { getCitiesAction } from "./redux/actions/citiesActions";
import { getBanksAction } from "./redux/actions/banksActions";
import axios from "axios";
import { NoPermission } from "./pages/no-permission/NoPermission";

export const App = () => {
  const dispatch = useDispatch();
  const routes = AppRoutes();

  const fetchData = useCallback(async () => {
    try {
      const [citiesResponse, banksResponse] = await Promise.all([
        axios.get(
          "https://test.eranit.co.il/ErnServices/api/generaldata/getcities"
        ),
        axios.get(
          "https://test.eranit.co.il/ErnServices/api/generaldata/GetBanks"
        ),
      ]);

      dispatch(getCitiesAction(citiesResponse.data));
      dispatch(getBanksAction(banksResponse.data));
    } catch (error) {
      console.error(error); // Handle any errors that occur during the requests
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Wrapper>
        <SideBar />
        <ContentWrapper>
          <Content>
            <Routes>
              {routes.map((route) => {
                if (route.permission) {
                  return (
                    <Route
                      key={route.route}
                      exact
                      path={route.route}
                      element={route.element}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={route.route}
                      exact
                      path={route.route}
                      element={<NoPermission />}
                    />
                  );
                }
              })}
            </Routes>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};
