import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/Dashboard.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Calculator SaaS</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
