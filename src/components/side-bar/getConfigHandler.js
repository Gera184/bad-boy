export function getConfigHandler(language) {
  const {
    checkTransaction,
    transmissionBankAccount,
    transmissionByTel,
    existingTransaction,
  } = language.texts;

  const config = [
    {
      title: checkTransaction,
      path: "/CheckPurchase",
    },
    {
      title: transmissionBankAccount,
      path: "/HokPurchase",
    },
    {
      title: transmissionByTel,
      path: "/PhoneHokPurchase",
    },
    {
      title: existingTransaction,
      path: "/UpdatePurchase",
    },
  ];

  return config;
}
