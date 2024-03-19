import { combineReducers } from "redux";

import { positionReducer } from "./positions/position-reducer";
import { }

export const rootReducer = combineReducers({
    positions: positionReducer,
})