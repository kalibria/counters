import {useEffect, useState} from "react";
import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Button} from "./Button";

type BoxCounter2Props = {
    startValue: number
    maxValue: number
    errorMaxV: boolean
    errorStartV: boolean
    textError: string
}

export const BoxCounter2 = ({startValue, maxValue, errorStartV, errorMaxV, textError}: BoxCounter2Props) => {

    const [state, setState] = useState(startValue);

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

    const isDisable = () => {
        if(state === maxValue || textError){
            return true
        }else{
            return false
        }
    }

    return (
        <BoxCounter>
            <ElWrapper>
                {textError ? <div className={'textError'}>{textError}</div> :
                    <div className={state === maxValue ? 'finish' : ''}>{state}</div>
                }
            </ElWrapper>
            <ElWrapper flexDirection={'row'}>
                <Button name={'inc'} handleClick={increment} color={'#03a9f482'} isDisabled={isDisable()}/>
                <Button name={'reset'} handleClick={reset} color={'#03a9f482'} isDisabled={Boolean(textError)}/>
            </ElWrapper>

        </BoxCounter>
    )
}