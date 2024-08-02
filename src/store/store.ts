 import {combineReducers, compose, legacy_createStore, Store} from "redux";
import {valuesReducer} from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    values: valuesReducer,

});

export const store:Store<AppRootStateType> = legacy_createStore(rootReducers, composeEnhancers());

export type AppRootStateType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store;
