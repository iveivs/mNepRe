import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";

imp

export const rootReducer = combineReducers({
    theme: themeReducer,
})