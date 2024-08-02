export type SetStartValue = {
    type: 'SET-START-VALUE',
    payload: {
        startValue: number,
    }
}

export type SetMaxValue = {
    type: "SET-MAX-VALUE",
    payload: {
        maxValue: number
    }
}

export type IsValuesValid = {
    type: 'IS-VALUES-VALID',
    payload: {
        startValue: number
        maxValue: number,
    }
}

export type CheckMaxValue = {
    type: 'CHECK-MAX-VALUE',
    payload: {
        maxValue: number
    }
}

export type CompareMaxStartValues = {
    type: 'COMPARE-MAX-START-VALUES',
    payload: {
        maxValue: number,
    }
}

export type CheckStartValue = {
    type: 'CHECK-START-VALUE',
    payload: {
        startValue: number
    }
}

export type CompareStartMaxValue = {
    type: 'COMPARE-START-MAX-VALUES',
    payload: {
        startValue: number,
    }
}

export type ActionType =
    | SetStartValue
    | SetMaxValue
    | IsValuesValid
    | CheckMaxValue
    | CompareMaxStartValues
    | CheckStartValue
    | CompareStartMaxValue


export const setStartValueAC = (newValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            startValue: newValue
        }
    } as const
}

export const setMaxValueAC = (mewValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            maxValue: mewValue
        }
    } as const
}

export const checkMaxValueIsValid = (value: number) => {
    // debugger;

    return {
        type: 'CHECK-MAX-VALUE',
        payload: {
            maxValue: value
        }
    } as const
}

export const checkIsValuesValid = (startV: number, maxV: number) => {
    // debugger;

    return {
        type: 'IS-VALUES-VALID',
        payload: {
            startValue: startV,
            maxValue: maxV
        }
    } as const
}

export const compareMaxStartValues = (maxValue: number) => {
    // debugger;

    return {
        type: 'COMPARE-MAX-START-VALUES',
        payload: {
            maxValue,
        }
    } as const
}

export const checkStartValueIsValid = (startValue: number) => {

    return {
        type: 'CHECK-START-VALUE',
        payload: {
            startValue,
        }
    } as const
}

export const compareStartMaxValues = (startValue: number) => {

    return {
        type: 'COMPARE-START-MAX-VALUES',
        payload: {
            startValue,
        }
    } as const
}