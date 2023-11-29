import React from 'react';
import './App.css';
import Dropdown from './dropdown/dropdown';

function App() {
  const items = ["HTML", "CSS", "ReactJS", "NodeJS","DSA"]

  return (
    <div className="App">
      <h2>SELECT ITOM (VICKY PAL)</h2>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
