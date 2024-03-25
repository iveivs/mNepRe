import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";

import 

export const rootReducer = combineReducers({
    theme: themeReducer,
})