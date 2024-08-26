import React, { useState } from 'react';

const DebtPage = ({ debts, setDebts }) => {
  const [newDebt, setNewDebt] = useState({
    name: '',
    amount: '',
    monthlyPayment: '',
    interestRate: '',
    payoffDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDebt({
      ...newDebt,
      [name]: name === 'amount' || name === 'monthlyPayment' || name === 'interestRate' ? parseFloat(value) : value,
    });
  };

  const addDebt = () => {
    setDebts([...debts, newDebt]);
    setNewDebt({
      name: '',
      amount: '',
      monthlyPayment: '',
      interestRate: '',
      payoffDate: '',
    });
  };

  return (
    <div className="debt-page">
      <h1>Debt Page</h1>
      <div className="debt-form">
        <input
          type="text"
          name="name"
          value={newDebt.name}
          onChange={handleInputChange}
          placeholder="Debt Name"
        />
        <input
          type="number"
          name="amount"
          value={newDebt.amount}
          onChange={handleInputChange}
          placeholder="Debt Amount"
        />
        <input
          type="number"
          name="monthlyPayment"
          value={newDebt.monthlyPayment}
          onChange={handleInputChange}
          placeholder="Monthly Payment"
        />
        <input
          type="number"
          name="interestRate"
          value={newDebt.interestRate}
          onChange={handleInputChange}
          placeholder="Interest Rate"
        />
        <input
          type="date"
          name="payoffDate"
          value={newDebt.payoffDate}
          onChange={handleInputChange}
          placeholder="Payoff Date"
        />
        <button onClick={addDebt}>Add Debt</button>
      </div>
      <div className="debt-list">
        {debts.map((debt, index) => (
          <div key={index} className="debt-item">
            <h3>{debt.name}</h3>
            <p>Amount: ${debt.amount.toFixed(2)}</p>
            <p>Monthly Payment: ${debt.monthlyPayment.toFixed(2)}</p>
            <p>Interest Rate: {debt.interestRate}%</p>
            <p>Payoff Date: {debt.payoffDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebtPage;
