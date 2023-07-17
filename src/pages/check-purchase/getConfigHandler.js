export function getConfigHandler(language) {
  const {
    purchasedetails,
    customerdetails,
    purchasesum,
    paymentsnumber,
    checknumber,
    duedate,
    bank,
    branch,
    account,
    CellPhoneNumber,
    CustomerNumber,
    checkPurchase,
  } = language.texts;

  const config = {
    header: {
      title: checkPurchase,
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

  return { config };
}
