import Home from "./pages/home/Home";
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
