// src/utils/calculations.js

// Calculate today's total balance based on assets, bills, income, and expenses
export const calculateTodayTotal = (assets, bills, income, expenses) => {
  const totalAssets = assets.reduce((total, asset) => {
    const monthlyAPY = (asset.value * asset.apy) / 100 / 12;
    return total + asset.value + monthlyAPY;
  }, 0);

  const totalBills = bills.reduce((total, bill) => total + bill.amount, 0);
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalIncome = income.reduce((total, incomeSource) => {
    switch (incomeSource.frequency) {
      case 'weekly':
        return total + incomeSource.amount * 4.33; // Convert weekly to monthly
      case 'monthly':
        return total + incomeSource.amount;
      case 'annually':
        return total + incomeSource.amount / 12; // Convert annual to monthly
      default:
        return total;
    }
  }, 0);

  return totalAssets + totalIncome - totalBills - totalExpenses;
};

// Calculate the financial projections for different time periods
export const calculateProjections = (incomeSources, expenses) => {
  const monthlyIncome = incomeSources.reduce((total, incomeSource) => {
    switch (incomeSource.frequency) {
      case 'weekly':
        return total + incomeSource.amount * 4.33; // Convert weekly to monthly
      case 'monthly':
        return total + incomeSource.amount;
      case 'annually':
        return total + incomeSource.amount / 12; // Convert annual to monthly
      default:
        return total;
    }
  }, 0);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  const weeklyProjection = (monthlyIncome - totalExpenses) / 4.33; // Convert monthly to weekly
  const monthlyProjection = monthlyIncome - totalExpenses;
  const yearlyProjection = monthlyProjection * 12; // Annual amount
  const fiveYearProjection = yearlyProjection * 5; // 5-year amount

  return {
    weekly: weeklyProjection,
    monthly: monthlyProjection,
    yearly: yearlyProjection,
    fiveYear: fiveYearProjection,
  };
};

// Calculate the total amount of debts (monthly payments)
export const calculateDebts = (debts) => {
  return debts.reduce((total, debt) => total + debt.monthlyPayment, 0);
};

// Calculate the total income from all sources (adjusted for frequency)
export const calculateIncome = (incomeSources) => {
  return incomeSources.reduce((total, incomeSource) => {
    switch (incomeSource.frequency) {
      case 'weekly':
        return total + incomeSource.amount * 4.33; // Approximate 4.33 weeks in a month
      case 'monthly':
        return total + incomeSource.amount;
      case 'annually':
        return total + incomeSource.amount / 12; // Convert annual income to monthly
      default:
        return total;
    }
  }, 0);
};
