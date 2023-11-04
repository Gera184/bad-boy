import Home from "./pages/home/Home";
<<<<<<< HEAD
import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";

export const routes = [
  {
    title: "",
    route: "/home",
    path: "",
    element: <Home />,
  },
  {
    title: "שידור עסקת צ'קים",
    route: "/CheckPurchase",
    path: "/CheckPurchase",
    element: <CheckPurchase />,
  },
  {
    title: "שידור הוראה לחיוב חשבון",
    route: "/HokPurchase",
    path: "/HokPurchase",
    element: <HokPurchase />,
  },
  {
    title: "שידור הוראה לחיוב חשבון טלפונית",
    route: "/PhoneHokPurchase",
    path: "/PhoneHokPurchase",
    element: <PhoneHokPurchase />,
  },
  {
    title: "פעולות על עסקה קיימת",
    route: "/UpdatePurchase",
    path: "/UpdatePurchase",
    element: <UpdatePurchase />,
  },
];
=======
import Login from "./pages/login/Login";
import Customer from "./pages/admin/Clients";
import { Navigate } from "react-router-dom";

export const AppRoutes = () => {
  const storedUser = localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;

  const RequireAdminAuth = ({ children }) => {
    return parsedUser ? children : <Navigate to="/login" />;
  };

  const RedirectToDashboard = () => {
    return <Navigate to="/dashboard" />;
  };
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: parsedUser ? <RedirectToDashboard /> : <Login />,
    },
    {
      path: "/dashboard/*",
      element: (
        <RequireAdminAuth>
          <Customer />
        </RequireAdminAuth>
      ),
    },
  ];
};
>>>>>>> 9a369c5 (remove conffeti)
