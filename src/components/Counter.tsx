import React, {useState} from 'react';
import {Scoreboard} from "./Scoreboard";
import {ButtonsArea} from "./ButtonsArea";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const maxValue = 5;
    const minValue = 0;
    return (
        <div className={'counter'}>
            <Scoreboard count={count} maxValue={maxValue}/>
            <ButtonsArea count={count} setCount={setCount} maxValue={maxValue} minValue={minValue}/>
        </div>
    );
};

