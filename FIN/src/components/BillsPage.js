import React, { useState } from 'react';

const BillsPage = ({ bills, setBills }) => {
  const [newBill, setNewBill] = useState({
    name: '',
    amount: 0,
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBill({
      ...newBill,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  const addBill = () => {
    setBills([...bills, newBill]);
    setNewBill({
      name: '',
      amount: 0,
      dueDate: '',
    });
  };

  return (
    <div className="bills-page">
      <h1>Bills Page</h1>
      <div className="bill-form">
        <input
          type="text"
          name="name"
          value={newBill.name}
          onChange={handleInputChange}
          placeholder="Bill Name"
        />
        <input
          type="number"
          name="amount"
          value={newBill.amount}
          onChange={handleInputChange}
          placeholder="Bill Amount"
        />
        <input
          type="date"
          name="dueDate"
          value={newBill.dueDate}
          onChange={handleInputChange}
          placeholder="Due Date"
        />
        <button onClick={addBill}>Add Bill</button>
      </div>
      <div className="bill-list">
        {bills.map((bill, index) => (
          <div key={index} className="bill-item">
            <h3>{bill.name}</h3>
            <p>Amount: ${bill.amount.toFixed(2)}</p>
            <p>Due Date: {bill.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsPage;
