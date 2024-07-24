import {BoxCounter} from "./BoxCounter";
import {Dispatch, FormEvent, SetStateAction} from "react";
import {ElWrapper} from "../additionalEllements/ElWrapper";
import {Input} from "../additionalEllements/Input";
import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import { setMaxValueErrorAC, setStartValueErrorAC} from "../../state/errorReducer";
import {checkIsValuesValid, setMaxValueAC, setStartValueAC} from "../../state/valuesReducer";

type BoxCounter1Props = {
    setTextError?: Dispatch<SetStateAction<string>>
    textError?: string
    onClickHandle?: () => void
}

export const BoxCounter1 = ({
                                setTextError,
                                textError,
                                onClickHandle
                            }: BoxCounter1Props) => {
    const startValue = useSelector<AppRootStateType, number>(state => state.values.startValue);
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxValue);
    const dispatch = useDispatch();
    const errorStartV = useSelector<AppRootStateType,string
    >(state => state.errors.startValueError);const errorMaxV = useSelector<AppRootStateType,string>(state => state.errors.maxValueError)


    const isDisabled = !!(errorMaxV || errorStartV || textError);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        dispatch(setMaxValueAC(+formJson.maxValue))
        dispatch(setStartValueAC(+formJson.startValue))


        // const isValid = +formJson.maxValue > +formJson.startValue && +formJson.maxValue !== +formJson.startValue && +formJson.maxValue > 0 && +formJson.startValue >= 0;

        const isValid = dispatch(checkIsValuesValid(+formJson.startValue, +formJson.maxValue))

        if (isValid && onClickHandle) {
            localStorage.setItem("maxValue2", String(formJson.maxValue));
            localStorage.setItem("startValue2", String(formJson.startValue));
            onClickHandle();
        } else if (isValid) {
            localStorage.setItem("maxValue", String(formJson.maxValue));
            localStorage.setItem("startValue", String(formJson.startValue))
        }
    }

    const checkMaxValue = (e: FormEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            dispatch(setMaxValueErrorAC('enter values and press `set`'))
            if (setTextError) {
                setTextError('enter values and press `set`')
            }

        } else if (+e.currentTarget.value === startValue || +e.currentTarget.value < startValue) {
            dispatch(setMaxValueErrorAC('enter values and press `set`'))
            dispatch(setStartValueErrorAC('enter values and press `set`'))

            if (setTextError) {
                setTextError('enter values and press `set`')
            }
        } else {
            dispatch(setMaxValueErrorAC(''));
            dispatch(setStartValueErrorAC(''))
            if (setTextError) {
                setTextError('')
            }
        }
    }

    const checkStartValue = (e: FormEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            dispatch(setStartValueErrorAC('enter values and press `set`'))
            if (setTextError) {
                setTextError('enter values and press `set`')
            }

        } else if (+e.currentTarget.value === maxValue || +e.currentTarget.value > maxValue) {
            dispatch(setMaxValueErrorAC('enter values and press `set`'));
            dispatch(setStartValueErrorAC('enter values and press `set`'))
            if (setTextError) {
                setTextError('enter values and press `set`')
            }
        } else {
            dispatch(setMaxValueErrorAC(""));
            dispatch(setStartValueErrorAC(""))
            if (setTextError) {
                setTextError('')
            }
        }
    }


    return (
        <BoxCounter>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ElWrapper>
                    <Input name={'max value'} defaultValue={maxValue} id={'maxValue'}
                           onInputHandler={checkMaxValue} error={errorMaxV}
                           onBlurHandle={(e) => dispatch(setMaxValueAC(+e.currentTarget.value))}/>
                    <Input name={'start value'} defaultValue={startValue} id={'startValue'}
                           onInputHandler={checkStartValue} error={errorStartV}
                           onBlurHandle={(e) => dispatch(setStartValueAC(+e.currentTarget.value))}/>
                </ElWrapper>
                <ElWrapper>
                    <Button name={'set'} color={'#03a9f482'} type={'submit'} isDisabled={isDisabled}/>
                </ElWrapper>
            </form>
        </BoxCounter>
    )
}