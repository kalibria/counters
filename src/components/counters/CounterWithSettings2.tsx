import {BoxCounter2} from "../boxCounters/BoxCounter2";
import {Button} from "../button/Button";
import React, {useState} from "react";
import {BoxCounter1} from "../boxCounters/BoxCounter1";

export const CounterWithSettings2 = () => {
    let initStartValue = 0;
    let initMaxValue = 5;
    if (localStorage.getItem("startValue2")) {
        initStartValue = Number(localStorage.getItem("startValue2"));
    }
    if (localStorage.getItem("maxValue2")) {
        initMaxValue = Number(localStorage.getItem("maxValue2"));
    }

    const [isSetClicked, setIsSetClicked] = useState<boolean>(false);
    const [startValue, setStartValue] = useState(initStartValue);
    const [maxValue, setMaxValue] = useState(initMaxValue);
    const onSetClick = () => {
        setIsSetClicked(true)
    }
    const closeWindow = () => {
        setIsSetClicked(false)
    }

    return (

        <div className={'wrapper'} >
            {isSetClicked ? (
                    <BoxCounter1 startValue={startValue} maxValue={maxValue} setStartValue={setStartValue}
                                 setMaxValue={setMaxValue} onClickHandle={closeWindow}/>

            ) : (
                <BoxCounter2 startValue={startValue} maxValue={maxValue}>
                    <Button name={'set'} color={'#03a9f482'} handleClick={onSetClick}/>
                </BoxCounter2>
            )}
        </div>
    )
}