import {BoxCounter1} from "./BoxCounter1";
import {BoxCounter2} from "./BoxCounter2";
import React, {useState} from "react";

export const CounterWithSettings = () => {
    const initStartValue = 0;
    const initMaxValue = 5;

    const [maxValue, setMaxValue] = useState(initMaxValue);
    const [startValue, setStartValue] = useState(initStartValue)
    return (
        <div className={'wrapper'}>
            <BoxCounter1 maxValue = {maxValue} startValue = {startValue} setMaxValue={setMaxValue} setStartValue={setStartValue}/>
            <BoxCounter2 maxValue = {maxValue} startValue = {startValue}/>
        </div>
    )
}