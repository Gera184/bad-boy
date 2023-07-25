export function validate(values) {
  const errors = {};

  // Validation logic for purchaseSum field

  if (values.paymentNumber > 1) {
    if (!values.firstCheckSum) {
      if (
        !/^[1-9]\d{0,5}$/.test(values.firstCheckSum) ||
        Number(values.firstCheckSum) <= 0
      ) {
        errors.firstCheckSum = "Purchase sum is required";
      }
    }
  }

  return errors;
}
