import {setMaxValueAC, setStartValueAC, ValuesReducer} from "./valuesReducer";

describe("check values",()=>{
    let  initValues = {
        startValue: 0,
        maxValue: 5,
        valuesIsValid: true
    };
    beforeEach(() => {
        initValues = {
            startValue: 0,
            maxValue: 5,
            valuesIsValid: true
        };
    })

    test("max value should be changed", () => {
        const newValue = ValuesReducer(initValues, setMaxValueAC(8));

        expect(newValue.maxValue).toBe(8);
        expect(newValue.maxValue).not.toBe(5)
        expect(newValue.startValue).toBe(0)
    })

    test("start value should be changed",()=>{
        const newValue = ValuesReducer(initValues, setStartValueAC(3))

        expect(newValue.startValue).toBe(3);
        expect(newValue.startValue).not.toBe(0)
        expect(newValue.maxValue).toBe(5)
    })
})

