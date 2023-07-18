import V from "../../../assets/icons/V.svg";
import InfoFull from "../../../assets/icons/info_full.svg";

export function getConfigHandler(language) {
  // const {} = language.texts;

  const config = {
    statusLabel: "סטטוס עסקה",
    statusText: {
      icon: V,
      alt: "v",
      text: "העסקה אושרה",
    },
    contactUsText: "התקשר אלינו 03-9534222",

    middleContant: {
      buttonLabel: "הדפסת אישור",
      inputPlaceholder: "מספר אישור",
    },
    leftButtons: [
      {
        type: "submit",
        background: "var(--green, #33B629)",
        textColor: "white",
        borderColor: "#33B629",
        children: "שידור עסקה",
      },
    ],
    error: {
      text: "אחד או יותר מהפרטים חסרים או שגויים",
      icon: InfoFull,
    },
  };

  return { config };
}
