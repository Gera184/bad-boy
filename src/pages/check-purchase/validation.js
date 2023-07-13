export function validate(values) {
  const errors = {};

  // Validation logic for purchaseSum field
  if (values.purchaseSum !== "") {
    if (
      !/^[1-9]\d{0,5}$/.test(values.purchaseSum) ||
      Number(values.purchaseSum) <= 0
    ) {
      errors.purchaseSum = "Purchase sum is required";
    }
  }

  return errors;
}
