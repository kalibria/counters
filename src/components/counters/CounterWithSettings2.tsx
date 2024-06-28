import {BoxCounter2} from "../boxCounters/BoxCounter2";
import {Button} from "../button/Button";

export const CounterWithSettings2 = () => {
    return (
        <div className={'wrapper'}>
            <BoxCounter2 startValue={0} maxValue={5} textError={''}>
                <Button name={'set'} color={'#03a9f482'}/>
            </BoxCounter2>
        </div>
    )
}