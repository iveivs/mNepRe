import { combineReducers } from "redux";
import { todos } from './todos/todos-reducer'
imp

export const rootReducer = combineReducers({
    todos,
})