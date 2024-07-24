import {MaxValueReducer, SetMaxValue} from "./maxValue-reducer";

let initMaxValue: number;

beforeEach(() => {
    initMaxValue = 5;
})

test("init value should be changed", () => {
    const newValue = MaxValueReducer(initMaxValue, SetMaxValue(8))

    expect(newValue).toBe(8);
    expect(newValue).not.toBe(5)
})