import React, {useState} from "react";
import {BoxCounter1} from "../boxCounters/BoxCounter1";
import {BoxCounter2} from "../boxCounters/BoxCounter2";




export const CounterWithSettings = () => {
    let initStartValue = 0;
    let initMaxValue = 5;

    if(localStorage.getItem("startValue")){
        initStartValue = Number(localStorage.getItem("startValue"))
    }
    if(localStorage.getItem("maxValue")){
        initMaxValue = Number(localStorage.getItem("maxValue"))
    }

    const [maxValue, setMaxValue] = useState(initMaxValue);
    const [startValue, setStartValue] = useState(initStartValue);

    const [textError, setTextError] = useState('')

    return (
        <div className={'wrapper'}>
            {/*<BoxCounter1 maxValue = {maxValue} startValue = {startValue} setMaxValue={setMaxValue} setStartValue={setStartValue} setTextError={setTextError} textError={textError}/>*/}
            {/*<BoxCounter2 maxValue = {maxValue} startValue = {startValue} textError={textError}/>*/}
        </div>
    )
}