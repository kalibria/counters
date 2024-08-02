import {AppRootStateType} from "../store";


export const selectErrorStartV = (state: AppRootStateType) : string => state.errors.startValueError;
export const selectErrorMaxV = (state: AppRootStateType): string => state.errors.maxValueError