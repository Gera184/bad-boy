import UpdatePurchase from "./pages/update-purchase/UpdatePurchase.js";
import PhoneHokPurchase from "./pages/phone-hok-purchase/PhoneHokPurchase.js";
import HokPurchase from "./pages/hok-purchase/HokPurchase.js";
import CheckPurchase from "./pages/check-purchase/CheckPurchase.js";

export const routes = [
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
