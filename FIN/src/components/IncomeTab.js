import React, { useState } from 'react';

const IncomeTab = () => {
  const [income, setIncome] = useState({
    salary: 0,
    bonuses: 0,
    investments: 0,
    otherIncome: 0,
  });

  const handleInputChange = (e) => {
    setIncome({ ...income, [e.target.name]: parseFloat(e.target.value) });
  };

  const totalIncome = () => {
    return income.salary + income.bonuses + income.investments + income.otherIncome;
  };

  return (
    <div className="income-tab">
      <h1>Income Tab</h1>
      <div className="income-form">
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={income.salary}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bonuses:
          <input
            type="number"
            name="bonuses"
            value={income.bonuses}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Investments:
          <input
            type="number"
            name="investments"
            value={income.investments}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Other Income:
          <input
            type="number"
            name="otherIncome"
            value={income.otherIncome}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="income-summary">
        <h2>Total Income: ${totalIncome().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default IncomeTab;
