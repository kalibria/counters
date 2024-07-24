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

export type initErrorStateType = {
    startValueError: string,
    maxValueError: string
}

const initErrorState = {
    startValueError: "",
    maxValueError: ""
};

export const ErrorReducer = (state = initErrorState, action: ActionType) => {
    switch (action.type) {
        case 'SET-MAX-VALUE-ERROR': {
            return {...state, maxValueError: action.payload.error}
        }
        case 'SET-START-VALUE-ERROR': {
            return {...state, startValueError: action.payload.error}
        }
        default:
            return state
    }
}

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