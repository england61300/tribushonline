import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import AssetsPage from "./components/AssetsPage";
import BillsPage from "./components/BillsPage";
import IncomePage from "./components/IncomeTab";
import ExpensesTab from "./components/ExpensesTab";
import DebtPage from "./components/DebtPage";
import CollapsibleSection from "./components/CollapsibleSection";
import "./styles/Dashboard.css";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [assets, setAssets] = useState([]);
  const [bills, setBills] = useState([]);
  const [incomeSources, setIncomeSources] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [debts, setDebts] = useState([]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <Dashboard
            assets={assets}
            bills={bills}
            incomeSources={incomeSources}
            expenses={expenses}
            debts={debts}
          />
        );
      case "Assets":
        return <AssetsPage assets={assets} setAssets={setAssets} />;
      case "Bills":
        return <BillsPage bills={bills} setBills={setBills} />;
      case "Income":
        return <IncomePage incomeSources={incomeSources} setIncomeSources={setIncomeSources} />;
      case "Expenses":
        return <ExpensesTab expenses={expenses} setExpenses={setExpenses} />;
      case "Debt":
        return <DebtPage debts={debts} setDebts={setDebts} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Calculator</h1>
      </header>
      <nav>
        <button
          className={activeTab === "Dashboard" ? "active" : ""}
          onClick={() => setActiveTab("Dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeTab === "Assets" ? "active" : ""}
          onClick={() => setActiveTab("Assets")}
        >
          Assets
        </button>
        <button
          className={activeTab === "Bills" ? "active" : ""}
          onClick={() => setActiveTab("Bills")}
        >
          Bills
        </button>
        <button
          className={activeTab === "Income" ? "active" : ""}
          onClick={() => setActiveTab("Income")}
        >
          Income
        </button>
        <button
          className={activeTab === "Expenses" ? "active" : ""}
          onClick={() => setActiveTab("Expenses")}
        >
          Expenses
        </button>
        <button
          className={activeTab === "Debt" ? "active" : ""}
          onClick={() => setActiveTab("Debt")}
        >
          Debt
        </button>
      </nav>
      <main>{renderTabContent()}</main>
       <footer>
        <p>&copy; 2024 TriBush LLC. All rights reserved.</p>
        <a href="https://buymeacoffee.com/tribush" class="donate-button">Buy Me a Coffee</a>
      </footer>
    </div>
  );
}

export default App;
