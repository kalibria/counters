import {ActionType} from "../actions/values";

const initValues = {
    startValue: 0,
    maxValue: 5,
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
            return state
        }
        default:
            return state
    }
}