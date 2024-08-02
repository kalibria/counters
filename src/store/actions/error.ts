export type SetMaxValueError = {
    type: "SET-MAX-VALUE-ERROR",
    payload: {
        error: string
    }
}

export type SetStartValueError = {
    type: "SET-START-VALUE-ERROR",
    payload: {
        error: string
    }
}

export type ActionType =
    | SetMaxValueError
    | SetStartValueError



export const setMaxValueErrorAC = (error: string) => {
    return {
        type: 'SET-MAX-VALUE-ERROR',
        payload: {
            error: error
        }
    } as const
}

export const setStartValueErrorAC = (error: string) => {
    return {
        type: 'SET-START-VALUE-ERROR',
        payload: {
            error: error
        }
    } as const
}