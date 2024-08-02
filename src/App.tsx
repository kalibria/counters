import React from 'react';
import './App.css';
import {Counter} from "./components/counters/Counter";
import {ProgressCounter} from "./components/counters/ProgressCounter";
import {CounterWithSettings} from "./components/counters/CounterWithSettings";
import {CounterWithSettings2} from "./components/counters/CounterWithSettings2";
import {CounterWithRedux} from "./components/counters/CounterWithRedux";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<div className={'wrapper'}>*/}
                {/*    <Counter/>*/}
                {/*    <ProgressCounter/>*/}
                {/*</div>*/}
                {/*<CounterWithSettings/>*/}
                {/*<CounterWithSettings2/>*/}

                <CounterWithRedux/>

            </div>
        </Provider>
    );
}

export default App;
