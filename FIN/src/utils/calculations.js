export const calculateProjections = (data) => {
  // Implement the logic to calculate weekly, monthly, and yearly projections based on the provided data
  const { todayTotal, debts, income } = data;

  const weeklyProjection = todayTotal - debts + income / 52;
  const monthlyProjection = todayTotal - debts + income / 12;
  const yearlyProjection = todayTotal - debts + income;

  return {
    weekly: weeklyProjection,
    monthly: monthlyProjection,
    yearly: yearlyProjection,
  };
};

export const calculateDebtPayoff = (debt) => {
  // Implement the logic to calculate the debt payoff timeline based on the provided debt data
  const { amount, monthlyPayment, interestRate } = debt;
  let remainingBalance = amount;
  let months = 0;

  while (remainingBalance > 0) {
    const interest = remainingBalance * (interestRate / 100) / 12;
    const principal = monthlyPayment - interest;
    remainingBalance -= principal;
    months++;
  }

  return months;
};
