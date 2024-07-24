
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

export type ActionType =
    | SetStartValue
    | SetMaxValue

const initValues = {
    startValue: 0,
    maxValue: 5
};

export const ValuesReducer = (state = initValues, action: ActionType) =>{
    switch (action.type) {
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.startValue}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        default: return state
    }
}

export const setStartValueAC = (newValue: number) =>{
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