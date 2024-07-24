
type SetStartValue = {
    type: 'SET-START-VALUE',
    payload: {
        value: number
    }
}

export type ActionType =
    | SetStartValue

const initStartValue = 0;

export const StartValueReducer = (state = initStartValue, action: ActionType) =>{
    switch (action.type) {
        case 'SET-START-VALUE': {
            return state = action.payload.value
        }
        default: return state
    }
}

export const setStartValueAC = (newValue: number) =>{
    return {
        type: 'SET-START-VALUE',
        payload: {
            value: newValue
        }
    } as const
}