import {BoxCounter} from "./BoxCounter";
import {FormEvent} from "react";
import {ElWrapper} from "../additionalEllements/ElWrapper";
import {Input} from "../additionalEllements/Input";
import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";

import {
    checkIsValuesValid, checkMaxValueIsValid, checkStartValueIsValid, compareMaxStartValues, compareStartMaxValues,
    setMaxValueAC,

    setStartValueAC,

} from "../../store/actions";
import {

    selectMaxValue,
    selectMaxValueIsValid,
    selectStartValue, selectStartValueIsValid, selectValuesIsValid
} from "../../store/selectors";


type BoxCounter1Props = {
    onClickHandle?: () => void
}

export const BoxCounter1 = ({
                                onClickHandle
                            }: BoxCounter1Props) => {
    const startValue = useSelector(selectStartValue);
    const maxValue = useSelector(selectMaxValue);
    const maxValueIsValid = useSelector(selectMaxValueIsValid);
    const valuesIsValid = useSelector(selectValuesIsValid);
    const startValueIsValid = useSelector(selectStartValueIsValid);


    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        dispatch(setMaxValueAC(+formJson.maxValue))
        dispatch(setStartValueAC(+formJson.startValue))


        dispatch(checkIsValuesValid(+formJson.startValue, +formJson.maxValue))

        if (valuesIsValid && onClickHandle) {
            localStorage.setItem("maxValue2", String(formJson.maxValue));
            localStorage.setItem("startValue2", String(formJson.startValue));
            onClickHandle();
        } else if (valuesIsValid) {
            localStorage.setItem("maxValue", String(formJson.maxValue));
            localStorage.setItem("startValue", String(formJson.startValue))
        }
    }


    const checkMaxValue = (e: FormEvent<HTMLInputElement>) => {
        // debugger;
        dispatch(checkMaxValueIsValid(+e.currentTarget.value));
        dispatch(compareMaxStartValues(+e.currentTarget.value));
    }

    const checkStartValue = (e: FormEvent<HTMLInputElement>) => {
        dispatch(checkStartValueIsValid(+e.currentTarget.value));
        dispatch(compareStartMaxValues(+e.currentTarget.value));
    }

    return (
        <BoxCounter>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ElWrapper>
                    <Input name={'max value'} defaultValue={maxValue} id={'maxValue'}
                           onInputHandler={checkMaxValue} isValid={maxValueIsValid}
                           onBlurHandle={(e) => dispatch(setMaxValueAC(+e.currentTarget.value))}/>
                    <Input name={'start value'} defaultValue={startValue} id={'startValue'}
                           onInputHandler={checkStartValue} isValid={startValueIsValid}
                           onBlurHandle={(e) => dispatch(setStartValueAC(+e.currentTarget.value))}/>
                </ElWrapper>
                <ElWrapper>
                    <Button name={'set'} color={'#03a9f482'} type={'submit'} isDisabled={!maxValueIsValid || !startValueIsValid || !valuesIsValid}/>
                </ElWrapper>
            </form>
        </BoxCounter>
    )
}