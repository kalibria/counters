import {AppRootStateType} from "../store";


export const selectStartValue = (state: AppRootStateType): number => state.values.startValue;
export const selectMaxValue = (state: AppRootStateType): number => state.values.maxValue