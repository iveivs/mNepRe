import { combineReducers } from "redux";

import { positionReducer } from "./positions/position-reducer";
imp

export const rootReducer = combineReducers({
    positions: positionReducer,
})