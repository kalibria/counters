import {BoxCounter1} from "./BoxCounter1";
import {BoxCounter2} from "./BoxCounter2";
import React, {useState} from "react";



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

    const [errorMaxV, setErrorMaxV] = useState(false);
    const [errorStartV, setErrorStartV] = useState(false);
    const [textError, setTextError] = useState('')

    return (
        <div className={'wrapper'}>
            <BoxCounter1 maxValue = {maxValue} startValue = {startValue} setMaxValue={setMaxValue} setStartValue={setStartValue} errorMaxV={errorMaxV} errorStartV={errorStartV} setErrorMaxV={setErrorMaxV} setErrorStartV={setErrorStartV} setTextError={setTextError} textError={textError}/>
            <BoxCounter2 maxValue = {maxValue} startValue = {startValue} errorMaxV={errorMaxV} errorStartV={errorStartV} textError={textError}/>
        </div>
    )
}