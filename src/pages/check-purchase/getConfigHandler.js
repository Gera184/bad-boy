export function getConfigHandler(language) {
  const {
    purchasedetails,
    customerdetails,
    purchasesum,
    paymentsnumber,
    paymentnumber,
    checknumber,
    checksum,
    duedate,
    PaymentDate,
    bank,
    branch,
    account,
    CellPhoneNumber,
    CustomerNumber,
    checkPurchase,
  } = language.texts;

  const paymentsData = {
    titles: [paymentnumber, PaymentDate, checksum, checknumber],
    values: [
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
      {
        paymentsNumber: "1",
        dueDate: "05/05/2023",
        pyamentSum: "₪1200",
        checkNumber: "16546545",
      },
    ],
  };

  const config = {
    header: {
      title: checkPurchase,
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
            type: "text",
            label: purchasesum,
          },
          {
            name: "paymentNumber",
            placeHolder: paymentsnumber,
            type: "select",
            optionsList: [
              { value: "1", text: "1" },
              { value: "2", text: "2" },
            ],
            label: paymentsnumber,
          },
          {
            name: "checkNumber",
            placeHolder: checknumber,
            type: "text",
            label: checknumber,
          },
          {
            name: "dueDate",
            placeHolder: duedate,
            type: "date",
            label: duedate,
          },
        ],
      },
      {
        title: customerdetails,
        inputs: [
          {
            name: "bank",
            placeHolder: bank,
            type: "text",
            label: bank,
          },
          {
            name: "branch",
            placeHolder: branch,
            type: "text",
            label: branch,
          },
          {
            name: "account",
            placeHolder: account,
            type: "text",
            label: account,
          },
          {
            name: "cellPhoneNumber",
            placeHolder: CellPhoneNumber,
            type: "tel",
            label: CellPhoneNumber,
          },
          {
            name: "CustomerNumber",
            placeHolder: CustomerNumber,
            type: "text",
            label: CustomerNumber,
          },
        ],
      },
    ],
  };

  return { config, paymentsData };
}
