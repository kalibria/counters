import {BoxCounter} from "./BoxCounter";
import {ElWrapper} from "./ElWrapper";
import {Input} from "./Input";
import {Button} from "./Button";

export const BoxCounter1 = () => {
    const onSetClick = () => {

    }
    return (
        <BoxCounter>
            <ElWrapper>
                <Input name={'max value'} value={0}/>
                <Input name={'start value'} value={0}/>
            </ElWrapper>
            <ElWrapper>
                <Button name={'set'} handleClick={onSetClick} color={'#03a9f482'}/>
            </ElWrapper>
        </BoxCounter>
    )
}