import { combineReducers } from "redux";
import { todos } from './todostodos-reducer'

export const rootReducer = combineReducers({
    todos,
})