import {FunctionComponent, useState} from "react";
import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Button} from "./Button";

export const BoxCounter2: FunctionComponent = () => {
    const initValue = 0;
    const maxValue = 5;
    const [state, setState] = useState(initValue)
    const increment = () => {
        if(state < maxValue){
            setState(state + 1)
        }
    }
    const reset = () => {
        setState(initValue)
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