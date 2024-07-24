

type SetStartValue = {
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

const initValues = {
    startValue: 0,
    maxValue: 5,
    valuesIsValid: true
};

export const ValuesReducer = (state = initValues, action: ActionType) => {


    switch (action.type) {
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.startValue}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        case 'IS-VALUES-VALID': {
            const startValue = action.payload.startValue;
            const maxValue = action.payload.maxValue;

            const isValid = maxValue > startValue && maxValue !== startValue && maxValue > 0 && startValue >= 0;

            return {...state, valuesIsValid: isValid}
        }
        case 'CHECK-MAX-VALUE': {
            return state
        }
        default:
            return state
    }
}

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