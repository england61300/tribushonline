import React, { useState } from 'react';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="collapsible-section">
      <h2 onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? '▼' : '►'}</h2>
      {isOpen && children}
    </div>
  );
};

export default CollapsibleSection;
