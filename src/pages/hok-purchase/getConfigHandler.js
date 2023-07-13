export function getConfigHandler(language, citiesData, banksData) {
  const { cities, streets } = citiesData;
  const { banks,branches } = banksData;

  const {
    PurchaseTypeHok,
    purchasedetails,
    purchasesum,
    paymentsnumber,
    firstPaymentDate,
    customerdetails,
    numberAndBankName,
    branch,
    account,
    FirstName,
    LastName,
    CityName,
    noTexts,
    CellPhoneNumber,
    HouseNumber,
    StreetName,
  } = language.texts;

  const config = {
    header: {
      title: PurchaseTypeHok,
    },
    footer: {
      sections: [
        {
          type: "status",
          title: "title",
          status: "status",
          info: "info",
        },
        {
          type: "buttonGroup",
          name: "leftButtonGroup",
        },
      ],
    },
    sections: [
      {
        title: purchasedetails,
        inputs: [
          {
            name: "purchaseSum",
            placeHolder: purchasesum,
            type: "number",
            label: purchasesum,
          },
          {
            name: "paymentNumber",
            placeHolder: paymentsnumber,
            type: "number",
            label: paymentsnumber,
          },
          {
            name: "firstPaymentDate",
            placeHolder: firstPaymentDate,
            type: "date",
            label: firstPaymentDate,
          },
        ],
      },
      {
        title: customerdetails,
        inputs: [
          {
            name: "numberAndBankName",
            placeHolder: numberAndBankName,
            type: "select",
            optionsList: banks,
            label: numberAndBankName,
          },
          {
            name: "branch",
            placeHolder: branch,
            type: "select",
            label: branch,
            optionsList:branches,
          },
          {
            name: "account",
            placeHolder: account,
            type: "number",
            label: account,
          },
          {
            name: "FirstName",
            placeHolder: FirstName,
            type: "text",
            label: FirstName,
          },
          {
            name: "LastName",
            placeHolder: LastName,
            type: "text",
            label: LastName,
          },
          {
            name: "CityName",
            placeHolder: CityName,
            type: "select",
            optionsList: cities || [],
            label: CityName,
          },
          {
            name: "StreetName",
            placeHolder: StreetName,
            type: "select",
            optionsList: streets || [],
            label: StreetName,
          },
          {
            name: "HouseNumber",
            placeHolder: HouseNumber,
            type: "number",
            label: HouseNumber,
          },
          {
            name: "CellPhoneNumber",
            placeHolder: CellPhoneNumber,
            type: "tel",
            label: CellPhoneNumber,
          },
          {
            name: "noTexts",
            placeHolder: noTexts,
            type: "checkbox",
            label: noTexts,
          },
        ],
      },
    ],
  };

  return { config };
}
