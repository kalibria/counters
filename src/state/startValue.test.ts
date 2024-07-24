import {setStartValueAC, StartValueReducer} from "./startValue-reducer";

let initStartValue: number

beforeEach(()=>{
    initStartValue = 0
})

test("init start value should be changed",()=>{
    const newValue = StartValueReducer(initStartValue, setStartValueAC(3))

    expect(newValue).toBe(3);
    expect(newValue).not.toBe(0)
})