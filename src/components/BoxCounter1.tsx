import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Input} from "./Input";
import {Button} from "./Button";
import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";

type BoxCounter1Props = {
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    errorMaxV: boolean
    errorStartV: boolean
    setErrorMaxV: Dispatch<SetStateAction<boolean>>
    setErrorStartV: Dispatch<SetStateAction<boolean>>
    setTextError: Dispatch<SetStateAction<string>>

}

export const BoxCounter1 = ({
                                startValue,
                                maxValue,
                                setStartValue,
                                setMaxValue,
                                setErrorStartV,
                                errorStartV,
                                setErrorMaxV,
                                errorMaxV,
                                setTextError,
                            }: BoxCounter1Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        setMaxValue(+formJson.maxValue);
        setStartValue(+formJson.startValue);
    }

    const checkMaxValue = (e: FormEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value < 0){
            setErrorMaxV(true);
            setTextError('enter values and press `set`')
        }else{
            setErrorMaxV(false);
            setTextError('')
        }
    }

    const checkStartValue = (e: FormEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value < 0 ){
            setErrorStartV(true);
            setTextError('enter values and press `set`')
        }else {
            setErrorStartV(false);
            setTextError('')
        }
    }

    useEffect(() => {
        if (maxValue < startValue || maxValue === startValue) {
            setErrorStartV(true);
            setErrorMaxV(true);
            setTextError('Incorrect value!')
        } else {
            setErrorStartV(false);
            setErrorMaxV(false);
            setTextError('')
        }
    }, [startValue, maxValue, setErrorStartV, setErrorMaxV, setTextError]);

    return (
        <BoxCounter>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ElWrapper>
                    <Input name={'max value'} defaultValue={maxValue} id={'maxValue'}
                           onInputHandler={checkMaxValue} error={errorMaxV}/>
                    <Input name={'start value'} defaultValue={startValue} id={'startValue'}
                           onInputHandler={checkStartValue} error={errorStartV}/>
                </ElWrapper>
                <ElWrapper>
                    <Button name={'set'} color={'#03a9f482'} type={'submit'}/>
                </ElWrapper>
            </form>
        </BoxCounter>
    )
}