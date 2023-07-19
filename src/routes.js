import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";
import Login from "./components/login/Login.js";
import { useMemo } from "react";

export const AppRoutes = () => {
  let allowPurchaseTypeCheck = true;
  let allowPurchaseTypeHok = true;
  let allowPurchaseTypePhoneHok = false;
  let allowUpdateTransaction = false;

  // if (user?.data) {
  //   allowPurchaseTypeCheck = user.data.allowPurchaseTypeCheck;
  //   allowPurchaseTypeHok = user.data.allowPurchaseTypeHok;
  //   allowPurchaseTypePhoneHok = user.data.allowPurchaseTypePhoneHok;
  //   allowUpdateTransaction = user.data.allowUpdateTransaction;
  // }

  const routes = useMemo(
    () => [
      {
        route: "/",
        element: <CheckPurchase />,
        permission: allowPurchaseTypeCheck,
      },
      {
        route: "/CheckPurchase",
        element: <CheckPurchase />,
        permission: allowPurchaseTypeCheck,
      },
      {
        route: "/HokPurchase",
        element: <HokPurchase />,
        permission: allowPurchaseTypeHok,
      },
      {
        route: "/PhoneHokPurchase",
        element: <PhoneHokPurchase />,
        permission: allowPurchaseTypePhoneHok,
      },
      {
        route: "/UpdatePurchase",
        element: <UpdatePurchase />,
        permission: allowUpdateTransaction,
      },
    ],
    [
      allowPurchaseTypeCheck,
      allowPurchaseTypeHok,
      allowPurchaseTypePhoneHok,
      allowUpdateTransaction,
    ]
  );

  return routes;
};
