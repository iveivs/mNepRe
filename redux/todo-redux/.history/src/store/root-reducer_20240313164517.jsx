import { combineReducers } from "redux";
import { todos } from './todos/todos-reducer'
import { filters }

export const rootReducer = combineReducers({
    todos,
})