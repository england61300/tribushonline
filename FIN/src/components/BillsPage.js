import React, { useState } from 'react';

const BillsPage = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({
    name: '',
    amount: 0,
    frequency: 'monthly',
  });

  const handleInputChange = (e) => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value });
  };

  const addBill = () => {
    setBills([...bills, newBill]);
    setNewBill({
      name: '',
      amount: 0,
      frequency: 'monthly',
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
        <select
          name="frequency"
          value={newBill.frequency}
          onChange={handleInputChange}
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="annually">Annually</option>
          <option value="quarterly">Quarterly</option>
        </select>
        <button onClick={addBill}>Add Bill</button>
      </div>
      <div className="bill-list">
        {bills.map((bill, index) => (
          <div key={index} className="bill-item">
            <h3>{bill.name}</h3>
            <p>Amount: ${bill.amount.toFixed(2)}</p>
            <p>Frequency: {bill.frequency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsPage;
