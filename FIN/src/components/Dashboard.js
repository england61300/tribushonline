// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = () => {
  const [todayTotal, setTodayTotal] = useState(0);
  const [projections, setProjections] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0
  });
  const [debts, setDebts] = useState(0);
  const [income, setIncome] = useState(0);

  return (
    <div className="dashboard">
      <h1>Financial Dashboard</h1>
      
      <section className="today-total">
        <h2>Today's Total</h2>
        <p>${todayTotal.toFixed(2)}</p>
      </section>

      <section className="projections">
        <h2>Projections</h2>
        <div className="projection-item">
          <h3>Next 52 Weeks</h3>
          <p>${projections.weekly.toFixed(2)}</p>
        </div>
        <div className="projection-item">
          <h3>Next 12 Months</h3>
          <p>${projections.monthly.toFixed(2)}</p>
        </div>
        <div className="projection-item">
          <h3>Next 5 Years</h3>
          <p>${projections.yearly.toFixed(2)}</p>
        </div>
      </section>

      <section className="debts-income">
        <div className="debts">
          <h2>Total Debts</h2>
          <p>${debts.toFixed(2)}</p>
        </div>
        <div className="income">
          <h2>Total Income</h2>
          <p>${income.toFixed(2)}</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
