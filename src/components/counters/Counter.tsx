import React, {useState} from 'react';
import {Scoreboard} from "../additionalEllements/Scoreboard";
import {ButtonsArea} from "../button/ButtonsArea";


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

