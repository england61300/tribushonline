// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import {
  calculateTodayTotal,
  calculateProjections,
  calculateDebts,
  calculateIncome,
} from "../utils/calculations";

const Dashboard = ({ assets, bills, expenses, incomeSources, debts }) => {
  const [todayTotal, setTodayTotal] = useState(0);
  const [projections, setProjections] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0,
    fiveYear: 0,
  });
  const [totalDebts, setTotalDebts] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    setTodayTotal(calculateTodayTotal(assets, bills, incomeSources, expenses));
    setProjections(calculateProjections(incomeSources, expenses));
    setTotalDebts(calculateDebts(debts));
    setTotalIncome(calculateIncome(incomeSources));
  }, [assets, bills, incomeSources, expenses, debts]);

  return (
    <div className="dashboard">
      <h1>Financial Dashboard</h1>

      <CollapsibleSection title="Today's Total">
        <p>${todayTotal.toFixed(2)}</p>
      </CollapsibleSection>

      <CollapsibleSection title="Projections">
        <div className="projection-item">
          <h3>Next Week</h3>
          <p>${projections.weekly.toFixed(2)}</p>
        </div>
        <div className="projection-item">
          <h3>Next Month</h3>
          <p>${projections.monthly.toFixed(2)}</p>
        </div>
        <div className="projection-item">
          <h3>Next Year</h3>
          <p>${projections.yearly.toFixed(2)}</p>
        </div>
        <div className="projection-item">
          <h3>Next 5 Years</h3>
          <p>${projections.fiveYear.toFixed(2)}</p>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Dashboard;
