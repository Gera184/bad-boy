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
            name: "checkNumber",
            placeHolder: checknumber,
            type: "number",
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
            type: "number",
            label: bank,
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
            name: "cellPhoneNumber",
            placeHolder: CellPhoneNumber,
            type: "tel",
            label: CellPhoneNumber,
          },
          {
            name: "CustomerNumber",
            placeHolder: CustomerNumber,
            type: "number",
            label: CustomerNumber,
          },
        ],
      },
    ],
  };

  return { config, paymentsData };
}
