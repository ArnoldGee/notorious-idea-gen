import React from 'react';
import Dashboard from './pages/dashboard/dashboard.component'
import Header from './components/header/header.component'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
