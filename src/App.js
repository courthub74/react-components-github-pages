import './App.css';
import React from "react";

// Import the components (by Page)
import Content from './components/Content'
import Form from './components/Form';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      {/* COMPONENTS GO HERE */}
      <Content />
      <Form />
      <Hooks />
    </div>
  );
}

export default App;
