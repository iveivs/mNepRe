import { combineReducers } from "redux";
import { todos } from './todos/todos-reducer'
import { filters } from ''

export const rootReducer = combineReducers({
    todos,
})