import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";
import Login from "./components/login/Login.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AppRoutes = () => {
  const { user } = useSelector((user) => user.user);

  const RequireAuth = ({ children }) => {
    return !user ? children : <Navigate to="/login" />;
  };

  return [
    {
      route: "/CheckPurchase",
      element: (
        <RequireAuth>
          <CheckPurchase />,
        </RequireAuth>
      ),
    },
    {
      route: "/HokPurchase",
      element: (
        <RequireAuth>
          <HokPurchase />,
        </RequireAuth>
      ),
    },
    {
      route: "/PhoneHokPurchase",
      element: (
        <RequireAuth>
          <PhoneHokPurchase />,
        </RequireAuth>
      ),
    },
    {
      route: "/UpdatePurchase",
      element: (
        <RequireAuth>
          <UpdatePurchase />,
        </RequireAuth>
      ),
    },
    {
      route: "/login",
      element: <Login />,
    },
  ];
};
