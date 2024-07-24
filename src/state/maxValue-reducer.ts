export type SetMaxValue = {
    type: "SET-MAX-VALUE",
    payload: {
        value: number
    }
}

export type ActionType =
    | SetMaxValue

const initMaxValue = 5;

export const MaxValueReducer = (state = initMaxValue, action: ActionType) => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {
            return state = action.payload.value
        }
        default: return state
    }
}

export const SetMaxValue = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            value: value
        }
    } as const
}