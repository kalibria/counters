import {FormEvent} from "react";


type InputProps = {
    name: string
    defaultValue: number
    id: string
    onInputHandler: (e: FormEvent<HTMLInputElement>) => void
    isValid?: boolean
    onBlurHandle: (e: FormEvent<HTMLInputElement>) => void
}

export const Input = ({name, defaultValue, id, onInputHandler, isValid, onBlurHandle}: InputProps) => {

    const inputClass = 'input';
    const errorClass = 'inputError';

    return (
        <div className={'form'}>
            <label htmlFor={name}>{name}: </label>
            <input id={id} type={'number'} name={id} defaultValue={defaultValue}
                   className={!isValid ? `${errorClass} ${inputClass}` : inputClass} onInput={onInputHandler} onBlur={onBlurHandle}/>
        </div>
    )
}