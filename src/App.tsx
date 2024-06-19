import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {ProgressCounter} from "./components/ProgressCounter";
import {BoxCounter1} from "./components/BoxCounter1";
import {BoxCounter2} from "./components/BoxCounter2";

function App() {
  return (
      <div className="App">
          <div className={'wrapper'}>
              <Counter/>
              <ProgressCounter/>
          </div>

          <div className={'wrapper'}>
              <BoxCounter1/>
              <BoxCounter2/>
          </div>


      </div>
  );
}

export default App;
