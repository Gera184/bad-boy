import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormHandler from "../../components/form/form-handler/FormHandler";
import { validate } from "./validation";
import { getConfigHandler } from "./getConfigHandler";
import { getStreetsAction } from "../../redux/actions/citiesActions";
import { getBranchesAction } from "../../redux/actions/banksActions";

const HokPurchase = () => {
  const dispatch = useDispatch();
  const { language, citiesData, banksData } = useSelector((state) => state);
  // const { paymentnumber, PaymentDate, checksum, checknumber } = language.texts;
  const { config } = getConfigHandler(language, citiesData, banksData);

  const initialFormValues = useMemo(() => {
    const initFormValues = {};
    const initInputValues = {};

    config.sections.forEach((section) => {
      section.inputs.forEach((input) => {
        initFormValues[input.name] = "";
        initInputValues[input.name] = { ...input, value: "", selected: {} }; // Include the entire input object and set an initial empty string value
      });
    });

    return { initFormValues, initInputValues };
  }, [config]);

  const [inputValues, setInputValues] = useState(initialFormValues);
  // const [paymentsData, setPaymentsData] = useState({
  //   titles: [paymentnumber, PaymentDate, checksum, checknumber],
  //   values: [],
  // });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const handleSelectChange = (value, sender, option) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      initInputValues: {
        ...prevInputValues.initInputValues,
        [sender]: {
          ...prevInputValues.initInputValues[sender],
          selected: option,
        },
      },
    }));
    switch (sender) {
      case "CityName":
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          StreetName: "",
        }));
        dispatch(getStreetsAction(value));
        break;
      case "numberAndBankName":
        dispatch(getBranchesAction(value));
        break;
      default:
        break;
    }
  };

  return (
    <FormHandler
      handleSubmit={handleSubmit}
      validate={validate}
      config={config}
      action={handleSelectChange}
      inputValues={inputValues}
      setInputValues={setInputValues}
    ></FormHandler>
  );
};

export default HokPurchase;
