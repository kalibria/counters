import React from 'react';
import {Button} from "./Button";

type ButtonsAreaProps = {
    count: number
    setCount: (count: number) => void
    minValue: number
    maxValue: number
}

export const ButtonsArea = ({count, setCount, minValue, maxValue}: ButtonsAreaProps) => {

    const increase = () => {
        if(count < maxValue){
            setCount(count + 1)
        }
    }

    const reset = () => {
        if(count > minValue){
            setCount(count - 1)
        }
    }


    return (
        <div className={'buttons-area'}>
            <Button name={'INC'} handleClick={increase} isDisabled={count === maxValue}/>
            <Button name={"RESET"} handleClick={reset} isDisabled={count === minValue}/>
        </div>
    );
};

