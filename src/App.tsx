import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {ProgressCounter} from "./components/ProgressCounter";
import {CounterWithSettings} from "./components/CounterWithSettings";


function App() {
  return (
      <div className="App">
          <div className={'wrapper'}>
              <Counter/>
              <ProgressCounter/>
          </div>
          <CounterWithSettings/>
      </div>
  );
}

export default App;
