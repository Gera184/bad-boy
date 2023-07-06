export function getConfigHandler(language) {
  const {
    purchasedetails,
    customerdetails,
    purchasesum,
    paymentsnumber,
    paymentnumber,
    checknumber,
    checksum,
    date,
    PaymentDate,
    numberAndBankName,
    brunchNumber,
    accountNumber,
    CellPhoneNumber,
    ApprovalCustomerID,
  } = language.texts;

  const config = [
    {
      title: purchasedetails,
      inputs: [
        {
          name: "purchaseSum",
          placeHolder: purchasesum,
          type: "text",
        },
        {
          name: "paymentNumber",
          placeHolder: paymentsnumber,
          type: "select",
          optionsList: [{ value: "1", text: "sadsad" }],
        },
        {
          name: "checkNumber",
          placeHolder: checknumber,
          type: "text",
        },
        {
          name: "dueDate",
          placeHolder: date,
          type: "date",
        },
      ],
    },
    {
      title: customerdetails,
      inputs: [
        {
          name: "bankNumber",
          placeHolder: numberAndBankName,
          type: "text",
        },
        {
          name: "branchNumber",
          placeHolder: brunchNumber,
          type: "text",
        },
        {
          name: "accountNumber",
          placeHolder: accountNumber,
          type: "text",
        },
        {
          name: "cellPhoneNumber",
          placeHolder: CellPhoneNumber,
          type: "tel",
        },
        {
          name: "approvalCustomerID",
          placeHolder: ApprovalCustomerID,
          type: "text",
        },
      ],
    },
  ];

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
    ],
  };

  return { config, paymentsData };
}
