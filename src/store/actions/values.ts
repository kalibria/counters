
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

export type ActionType =
    | SetStartValue
    | SetMaxValue
    | IsValuesValid
    | CheckMaxValue




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

export const checkIsValuesValid = (startV: number, maxV: number) => {
    return {
        type: 'IS-VALUES-VALID',
        payload: {
            startValue: startV,
            maxValue: maxV
        }
    } as const
}