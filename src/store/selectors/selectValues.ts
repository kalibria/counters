import {AppRootStateType} from "../store";


export const selectStartValue = (state: AppRootStateType): number => state.values.startValue;
export const selectMaxValue = (state: AppRootStateType): number => state.values.maxValue;
export const selectMaxValueIsValid = (state: AppRootStateType): boolean => state.values.maxValueIsValid;
export const selectValuesIsValid = (state: AppRootStateType): boolean => state.values.valuesIsValid;
export const selectStartValueIsValid = (state: AppRootStateType): boolean => state.values.startValueIsValid