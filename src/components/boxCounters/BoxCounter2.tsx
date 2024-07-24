import {ReactNode, useEffect, useState} from "react";
import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "../additionalEllements/ElWrapper";
import {Button} from "../button/Button";
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";



type BoxCounter2Props = {
    textError?: string
    children?:ReactNode
}

export const BoxCounter2 = ({textError, children}: BoxCounter2Props) => {
    const startValue = useSelector<AppRootStateType, number>(state => state.values.startValue);
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxValue);


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
        return !!(state === maxValue || textError);
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
                {children}
            </ElWrapper>

        </BoxCounter>
    )
}