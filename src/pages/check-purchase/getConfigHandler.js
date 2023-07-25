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
            required: false,
            readOnly: false,
          },
          {
            name: "paymentNumber",
            placeHolder: paymentsnumber,
            type: "select",
            label: paymentsnumber,
            required: false,
            readOnly: false,
          },
          {
            name: "checkNumber",
            placeHolder: checknumber,
            type: "number",
            label: checknumber,
            required: false,
            readOnly: false,
          },
          {
            name: "firstCheckSum",
            placeHolder: "firstCheckSum",
            type: "number",
            label: "firstCheckSum",
            required: true,
            readOnly: true,
          },
          {
            name: "dueDate",
            placeHolder: duedate,
            type: "date",
            label: duedate,
            required: false,
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
            required: false,
            readOnly: false,
          },
          {
            name: "branch",
            placeHolder: branch,
            type: "number",
            label: branch,
            required: false,
            readOnly: false,
          },
          {
            name: "account",
            placeHolder: account,
            type: "number",
            label: account,
            required: true,
            readOnly: false,
          },
          {
            name: "cellPhoneNumber",
            placeHolder: CellPhoneNumber,
            type: "tel",
            label: CellPhoneNumber,
            required: false,
            readOnly: false,
          },
          {
            name: "CustomerNumber",
            placeHolder: CustomerNumber,
            type: "number",
            label: CustomerNumber,
            required: false,
            readOnly: false,
          },
        ],
      },
    ],
  };

  return { config };
}
