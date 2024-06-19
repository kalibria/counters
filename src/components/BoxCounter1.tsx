import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Input} from "./Input";
import {Button} from "./Button";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";

type BoxCounter1Props = {
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}

export const BoxCounter1 = ({startValue, maxValue, setStartValue, setMaxValue}: BoxCounter1Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        setMaxValue(+formJson.maxValue);
        setStartValue(+formJson.startValue);
    }


    return (
        <BoxCounter>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ElWrapper>
                    <Input name={'max value'} defaultValue={maxValue} id={'maxValue'}/>
                    <Input name={'start value'} defaultValue={startValue} id={'startValue'}/>
                </ElWrapper>
                <ElWrapper>
                    <Button name={'set'} color={'#03a9f482'} type={'submit'}/>
                </ElWrapper>
            </form>
        </BoxCounter>
    )
}