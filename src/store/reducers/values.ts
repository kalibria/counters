import {ActionType} from "../actions/values";

const initValues = {
    startValue: 0,
    maxValue: 5,
    startValueIsValid: true,
    maxValueIsValid: true,
    valuesIsValid: true
};

export const valuesReducer = (state = initValues, action: ActionType) => {

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

            if (action.payload.maxValue < 0 || action.payload.maxValue === state.startValue || action.payload.maxValue <= state.startValue) {
                return {...state, maxValueIsValid: false}
            }else return {...state, maxValueIsValid: true}
        }
        case 'COMPARE-MAX-START-VALUES': {

            if (action.payload.maxValue === state.startValue || action.payload.maxValue < state.startValue){
                return {...state, valuesIsValid: false}
            }else return {...state, valuesIsValid: true}
        }
        case 'CHECK-START-VALUE': {
            if(action.payload.startValue < 0){
                return {...state, startValueIsValid: false}
            }else return {...state, startValueIsValid: true}
        }
        case 'COMPARE-START-MAX-VALUES': {
            if(action.payload.startValue === state.maxValue || action.payload.startValue  > state.maxValue){
                return {...state, valuesIsValid: false}
            }else return {...state, valuesIsValid: true}
        }
        default:
            return state
    }
}