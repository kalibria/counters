import React, {useState} from 'react';
import {Button} from "../button/Button";


export const ProgressCounter = () => {
    const minValue = 0;
    const initValue = 5;
    const [maxValue, setMaxValue] = useState(initValue);
    const [count, setCount] = useState(minValue);


    const increase = () => {
        if(count < maxValue){
            setCount(count + 1)
        }
    }

    const reset = () => {
        setMaxValue(Math.floor(Math.random() * 20));
        setCount(minValue);
    }


    return (
        <div className={'counter'}>
            <div>Max value: {maxValue}</div>
            <div className={count === maxValue ? 'finish' : 'count'}>{count}</div>
            <progress id={'progress'} max={maxValue} value={count} className={'progress'}/>
            <div className={'buttonsWrapper'}>
                <Button name={'Увеличить'} handleClick={increase} isDisabled={count === maxValue}/>
                <Button name={'Сбросить'} handleClick={reset}/>
            </div>

        </div>
    );
};

