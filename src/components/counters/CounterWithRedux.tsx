import {BoxCounter2} from "../boxCounters/BoxCounter2";
import {Button} from "../button/Button";
import React, {useState} from "react";
import {BoxCounter1} from "../boxCounters/BoxCounter1";

export const CounterWithRedux = () => {

    // if (localStorage.getItem("startValue2")) {
    //     initStartValue = Number(localStorage.getItem("startValue2"));
    // }
    // if (localStorage.getItem("maxValue2")) {
    //     initMaxValue = Number(localStorage.getItem("maxValue2"));
    // }

    const [isSetClicked, setIsSetClicked] = useState<boolean>(false);

    const onSetClick = () => {
        setIsSetClicked(true)
    }
    const closeWindow = () => {
        setIsSetClicked(false)
    }

    return (

        <div className={'wrapper'} >
            {isSetClicked ? (
                    <BoxCounter1 onClickHandle={closeWindow}/>
            ) : (
                <BoxCounter2>
                    <Button name={'set'} color={'#03a9f482'} handleClick={onSetClick}/>
                </BoxCounter2>
            )}
        </div>
    )
}