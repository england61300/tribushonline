import React, { useState } from 'react';

const ExpensesTab = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: '',
    amount: 0,
    category: '',
  });

  const handleInputChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      name: '',
      amount: 0,
      category: '',
    });
  };

  return (
    <div className="expenses-tab">
      <h1>Expenses Tab</h1>
      <div className="expense-form">
        <input
          type="text"
          name="name"
          value={newExpense.name}
          onChange={handleInputChange}
          placeholder="Expense Name"
        />
        <input
          type="number"
          name="amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          placeholder="Expense Amount"
        />
        <input
          type="text"
          name="category"
          value={newExpense.category}
          onChange={handleInputChange}
          placeholder="Expense Category"
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <h3>{expense.name}</h3>
            <p>Amount: ${expense.amount.toFixed(2)}</p>
            <p>Category: {expense.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesTab;
