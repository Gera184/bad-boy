export function validate(values) {
  const errors = {};

  // Validation logic for purchaseSum field
  if (!values.purchaseSum) {
    errors.purchaseSum = "Purchase sum is required";
  } else if (
    !/^[1-9]\d{0,5}$/.test(values.purchaseSum) ||
    Number(values.purchaseSum) <= 0
  ) {
    errors.purchaseSum =
      "Purchase sum must be a positive number with 1-6 digits";
  }

  // Validation logic for paymentNumber field
  if (!values.paymentNumber) {
    errors.paymentNumber = "Payment number is required";
  }

  // Validation logic for checkNumber field
  if (!values.checkNumber) {
    errors.checkNumber = "Check number is required";
  }

  // Validation logic for dueDate field
  if (!values.dueDate) {
    errors.dueDate = "Due date is required";
  }

  // Validation logic for bank field
  if (!values.bank) {
    errors.bank = "Bank is required";
  }

  // Validation logic for branch field
  if (!values.branch) {
    errors.branch = "Branch is required";
  }

  // Validation logic for account field
  if (!values.account) {
    errors.account = "Account is required";
  }

  // Validation logic for cellPhoneNumber field
  if (!values.cellPhoneNumber) {
    errors.cellPhoneNumber = "Cell phone number is required";
  }

  // Validation logic for CustomerNumber field
  if (!values.CustomerNumber) {
    errors.CustomerNumber = "Customer number is required";
  }

  return errors;
}
