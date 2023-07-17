import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";
import Login from "./components/login/Login.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { NoPermission } from "./pages/no-permission/NoPermission.js";

export const AppRoutes = () => {
  const { user } = useSelector((state) => state.user);

  let allowPurchaseTypeCheck = true;
  let allowPurchaseTypeHok = true;
  let allowPurchaseTypePhoneHok = false;
  let allowUpdateTransaction = false;

  // if (user.data) {
  //   allowPurchaseTypeCheck = user.data.allowPurchaseTypeCheck;
  //   allowPurchaseTypeHok = user.data.allowPurchaseTypeHok;
  //   allowPurchaseTypePhoneHok = user.data.allowPurchaseTypePhoneHok;
  //   allowUpdateTransaction = user.data.allowUpdateTransaction;
  // }

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
        permission: allowPurchaseTypeCheck,
      },
      {
        route: "/HokPurchase",
        element: (
          <RequireAuth>
            <HokPurchase />
          </RequireAuth>
        ),
        permission: allowPurchaseTypeHok,
      },
      {
        route: "/PhoneHokPurchase",
        element: (
          <RequireAuth>
            <PhoneHokPurchase />
          </RequireAuth>
        ),
        permission: allowPurchaseTypePhoneHok,
      },
      {
        route: "/UpdatePurchase",
        element: (
          <RequireAuth>
            <UpdatePurchase />
          </RequireAuth>
        ),
        permission: allowUpdateTransaction,
      },
      {
        route: "/login",
        element: <Login />,
      },
    ],
    []
  );

  return routes;
};
