import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Input} from "./Input";
import {Button} from "./Button";
import {Dispatch, FormEvent, SetStateAction} from "react";

type BoxCounter1Props = {
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    errorMaxV: boolean
    errorStartV: boolean
    setErrorMaxV: Dispatch<SetStateAction<boolean>>
    setErrorStartV: Dispatch<SetStateAction<boolean>>
}

export const BoxCounter1 = ({
                                startValue,
                                maxValue,
                                setStartValue,
                                setMaxValue,
                                setErrorStartV,
                                errorStartV,
                                setErrorMaxV,
                                errorMaxV
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
        +e.currentTarget.value < 0 ? setErrorMaxV(true) : setErrorMaxV(false)
    }

    const checkStartValue = (e: FormEvent<HTMLInputElement>) => {
        +e.currentTarget.value < 0 ? setErrorStartV(true) : setErrorStartV(false)
    }

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