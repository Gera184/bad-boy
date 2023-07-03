import React from "react";
import { useSelector } from "react-redux";

const HokPurchase = () => {
  const { language } = useSelector((lang) => lang);
  const { texts, lang } = language;

  return <div></div>;
};

export default HokPurchase;
