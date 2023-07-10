import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";
import Login from "./components/login/Login.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

export const AppRoutes = () => {
  const { user } = useSelector((state) => state.user);

  const RequireAuth = useCallback(
    ({ children }) => {
      return !user ? children : <Navigate to="/login" />;
    },
    [user]
  );

  const routes = useMemo(
    () => [
      {
        route: "/CheckPurchase",
        element: (
          <RequireAuth>
            <CheckPurchase />
          </RequireAuth>
        ),
      },
      {
        route: "/HokPurchase",
        element: (
          <RequireAuth>
            <HokPurchase />
          </RequireAuth>
        ),
      },
      {
        route: "/PhoneHokPurchase",
        element: (
          <RequireAuth>
            <PhoneHokPurchase />
          </RequireAuth>
        ),
      },
      {
        route: "/UpdatePurchase",
        element: (
          <RequireAuth>
            <UpdatePurchase />
          </RequireAuth>
        ),
      },
      {
        route: "/login",
        element: <Login />,
      },
    ],
    [RequireAuth]
  );

  return routes;
};
