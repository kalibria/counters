import {useEffect, useState} from "react";
import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Button} from "./Button";

type BoxCounter2Props = {
    startValue: number
    maxValue: number
}

export const BoxCounter2 = ({startValue, maxValue}: BoxCounter2Props) => {

    const [state, setState] = useState(startValue);
    console.log("startV", startValue)
    useEffect(() => {
        setState(startValue)
    }, [startValue]);

    const increment = () => {
        if(state < maxValue){
            setState(state + 1)
        }
    }
    const reset = () => {
        setState(startValue)
    }

    return (
        <BoxCounter>
            <ElWrapper>
                <div className={state === maxValue ? 'finish' : ''}>{state}</div>
            </ElWrapper>
            <ElWrapper flexDirection={'row'}>
                <Button name={'inc'} handleClick={increment} color={'#03a9f482'} isDisabled={state === maxValue}/>
                <Button name={'reset'} handleClick={reset} color={'#03a9f482'}/>
            </ElWrapper>

        </BoxCounter>
    )
}