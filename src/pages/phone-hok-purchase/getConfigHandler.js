export function getConfigHandler(language) {
  const {
    purchasedetails,
    purchasesum,
    paymentsnumber,
    firstPaymentDate,
    customerdetails,
    CellPhoneNumber,
    noTexts,
    PurchaseHokTransactionNowPhone,
  } = language.texts;

  const config = {
    header: {
      title: PurchaseHokTransactionNowPhone,
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
            name: "cellPhoneNumber",
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
