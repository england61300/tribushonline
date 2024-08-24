import React, { useState } from 'react';

const AssetsPage = () => {
  const [assets, setAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({
    name: '',
    type: 'cash',
    value: 0,
    apy: 0,
  });

  const handleInputChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const addAsset = () => {
    setAssets([...assets, newAsset]);
    setNewAsset({
      name: '',
      type: 'cash',
      value: 0,
      apy: 0,
    });
  };

  return (
    <div className="assets-page">
      <h1>Assets Page</h1>
      <div className="asset-form">
        <input
          type="text"
          name="name"
          value={newAsset.name}
          onChange={handleInputChange}
          placeholder="Asset Name"
        />
        <select
          name="type"
          value={newAsset.type}
          onChange={handleInputChange}
        >
          <option value="cash">Cash</option>
          <option value="bank">Bank Account</option>
          <option value="retirement">Retirement Account</option>
          <option value="stock">Stock</option>
        </select>
        <input
          type="number"
          name="value"
          value={newAsset.value}
          onChange={handleInputChange}
          placeholder="Asset Value"
        />
        <input
          type="number"
          name="apy"
          value={newAsset.apy}
          onChange={handleInputChange}
          placeholder="Annual Percentage Yield (APY)"
        />
        <button onClick={addAsset}>Add Asset</button>
      </div>
      <div className="asset-list">
        {assets.map((asset, index) => (
          <div key={index} className="asset-item">
            <h3>{asset.name}</h3>
            <p>Type: {asset.type}</p>
            <p>Value: ${asset.value.toFixed(2)}</p>
            {asset.type === 'bank' && <p>APY: {asset.apy}%</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsPage;
