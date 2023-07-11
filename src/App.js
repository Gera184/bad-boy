import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { getCitiesAction } from "./redux/actions/citiesActions";
import { getBanksAction } from "./redux/actions/banksActions";
import axios from "axios";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
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
    };

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
