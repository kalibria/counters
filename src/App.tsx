import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {ProgressCounter} from "./components/ProgressCounter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <ProgressCounter/>
    </div>
  );
}

export default App;
