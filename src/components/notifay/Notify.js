/* eslint-disable default-case */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notification = (color) => {
  toast.configure();
  switch (color) {
    case "added":
      return toast.success("נחזור אלייך בהקדם האפשרי", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "admin_added":
      return toast.success("הוספת לקוח", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};
