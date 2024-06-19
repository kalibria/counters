import {FunctionComponent} from "react";
import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Button} from "./Button";

export const BoxCounter2: FunctionComponent = () => {
    const onClickHandler = () => {

    }

    return (
        <BoxCounter>
            <ElWrapper>
                <div>count</div>
            </ElWrapper>
            <ElWrapper flexDirection={'row'}>
                <Button name={'inc'} handleClick={onClickHandler} color={'#03a9f482'}/>
                <Button name={'reset'} handleClick={onClickHandler} color={'#03a9f482'}/>
            </ElWrapper>

        </BoxCounter>
    )
}