import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Wrapper, ContentWrapper, Content } from "./App.styles";
import { AppRoutes } from "./routes.js";
import { getCitiesAction } from "./redux/actions/citiesActions";
import { getBanksAction } from "./redux/actions/banksActions";
import axios from "axios";
import { NoPermission } from "./pages/no-permission/NoPermission";
import Login from "./components/login/Login";

export const App = () => {
  const { user } = useSelector((state) => state.userData);

  const dispatch = useDispatch();
  const routes = AppRoutes();

  const isFirstRender = useRef(true);

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
    // The code uses the useRef hook to create a variable isFirstRender,
    //which, in combination with strict mode, allows the useEffect hook to skip executing fetchData()
    //during the initial render to avoid duplicated calls caused by strict mode.

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchData();
  }, [fetchData]);

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
          </>
        ) : (
          <>
            {routes.map((route) => {
              return (
                <Route
                  key={route.route}
                  exact
                  path={route.route}
                  element={
                    <>
                      <Header />
                      <Wrapper>
                        <SideBar />
                        <ContentWrapper>
                          <Content>
                            {route.permission ? (
                              <>{route.element}</>
                            ) : (
                              <NoPermission />
                            )}
                          </Content>
                        </ContentWrapper>
                      </Wrapper>
                    </>
                  }
                />
              );
            })}
          </>
        )}
        <Route path="*" element={<>not found</>} />
      </Routes>
    </Router>
  );
};
