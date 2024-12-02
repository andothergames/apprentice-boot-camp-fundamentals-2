export function calculateBill(customerType, adAmount, enhancements) {
  let bill = 0;
  const enhancementCost = 10
  const monthlyRate = {
    dealer: 50,
    private: 20
  }

  if (enhancements.length) {
    bill += enhancementCost * enhancements.length;
  }

  if (customerType === "Dealer") {
    bill += monthlyRate.dealer * adAmount;
  }

  if (customerType === "Private") {
    bill += monthlyRate.private * adAmount;
  }

  return bill;
}
