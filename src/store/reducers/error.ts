import {ActionType} from "../actions/error";


const initErrorState = {
    startValueError: "",
    maxValueError: ""
};

export const errorReducer = (state = initErrorState, action: ActionType) => {
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