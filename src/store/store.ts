import {combineReducers, legacy_createStore} from 'redux';
import {errorReducer, valuesReducer} from "./reducers";


const rootReducer = combineReducers({
     values: valuesReducer,
     errors: errorReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store