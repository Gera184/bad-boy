export function getConfigHandler(language, citiesData, banks) {
  const { cities, streets } = citiesData;

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

  const paymentsData = {
    // titles: [paymentnumber, PaymentDate, checksum, checknumber],
    // values: [
    //   {
    //     paymentsNumber: "1",
    //     dueDate: "05/05/2023",
    //     pyamentSum: "₪1200",
    //     checkNumber: "16546545",
    //   },
    //   {
    //     paymentsNumber: "1",
    //     dueDate: "05/05/2023",
    //     pyamentSum: "₪1200",
    //     checkNumber: "16546545",
    //   },
    //   {
    //     paymentsNumber: "1",
    //     dueDate: "05/05/2023",
    //     pyamentSum: "₪1200",
    //     checkNumber: "16546545",
    //   },
    //   {
    //     paymentsNumber: "1",
    //     dueDate: "05/05/2023",
    //     pyamentSum: "₪1200",
    //     checkNumber: "16546545",
    //   },
    // ],
  };

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
            type: "select",
            optionsList: [],
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
            optionsList: [],
            label: numberAndBankName,
          },
          {
            name: "branch",
            placeHolder: branch,
            type: "number",
            label: branch,
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
            optionsList: cities,
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

  return { config, paymentsData };
}
