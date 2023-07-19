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
            readOnly: false,
          },
          {
            name: "paymentNumber",
            placeHolder: paymentsnumber,
            type: "select",
            label: paymentsnumber,
            readOnly: false,
          },
          {
            name: "checkNumber",
            placeHolder: checknumber,
            type: "number",
            label: checknumber,
            readOnly: false,
          },
          {
            name: "firstCheckSum",
            placeHolder: "firstCheckSum",
            type: "number",
            label: "firstCheckSum",
            readOnly: true,
          },
          {
            name: "dueDate",
            placeHolder: duedate,
            type: "date",
            label: duedate,
            readOnly: false,
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
            readOnly: false,
          },
          {
            name: "branch",
            placeHolder: branch,
            type: "number",
            label: branch,
            readOnly: false,
          },
          {
            name: "account",
            placeHolder: account,
            type: "number",
            label: account,
            readOnly: false,
          },
          {
            name: "cellPhoneNumber",
            placeHolder: CellPhoneNumber,
            type: "tel",
            label: CellPhoneNumber,
            readOnly: false,
          },
          {
            name: "CustomerNumber",
            placeHolder: CustomerNumber,
            type: "number",
            label: CustomerNumber,
            readOnly: false,
          },
        ],
      },
    ],
  };

  return { config };
}
