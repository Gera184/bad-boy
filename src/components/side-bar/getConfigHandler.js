export function getConfigHandler(language, user) {
  const {
    checkTransaction,
    transmissionBankAccount,
    transmissionByTel,
    existingTransaction,
  } = language.texts;
  const {
    allowPurchaseTypeCheck,
    allowPurchaseTypeHok,
    allowPurchaseTypePhoneHok,
    allowUpdateTransaction,
  } = user;

  const config = [
    {
      title: checkTransaction,
      path: "/CheckPurchase",
      permission: allowPurchaseTypeCheck,
    },
    {
      title: transmissionBankAccount,
      path: "/HokPurchase",
      permission: allowPurchaseTypeHok,
    },
    {
      title: transmissionByTel,
      path: "/PhoneHokPurchase",
      permission: allowPurchaseTypePhoneHok,
    },
    {
      title: existingTransaction,
      path: "/UpdatePurchase",
      permission: allowUpdateTransaction,
    },
  ];

  return config;
}
