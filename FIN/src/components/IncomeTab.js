import React, { useState } from 'react';

const IncomeTab = ({ incomeSources, setIncomeSources }) => {
  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: '',
    frequency: 'monthly',
  });

  const handleInputChange = (e) => {
    setNewIncome({ ...newIncome, [e.target.name]: e.target.value });
  };

  const addIncome = () => {
    if (newIncome.source && newIncome.amount) {
      setIncomeSources([...incomeSources, { ...newIncome, amount: parseFloat(newIncome.amount) }]);
      setNewIncome({
        source: '',
        amount: '',
        frequency: 'monthly',
      });
    }
  };

  return (
    <div className="income-tab">
      <h1>Income Tab</h1>
      <div className="income-form">
        <input
          type="text"
          name="source"
          value={newIncome.source}
          onChange={handleInputChange}
          placeholder="Income Source"
        />
        <input
          type="number"
          name="amount"
          value={newIncome.amount}
          onChange={handleInputChange}
          placeholder="Income Amount"
        />
        <select
          name="frequency"
          value={newIncome.frequency}
          onChange={handleInputChange}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
        <button onClick={addIncome}>Add Income</button>
      </div>
      <div className="income-list">
        {incomeSources.map((income, index) => (
          <div key={index} className="income-item">
            <h3>{income.source}</h3>
            <p>Amount: ${income.amount.toFixed(2)}</p>
            <p>Frequency: {income.frequency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeTab;
