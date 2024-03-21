import { ADD_TODOS } from "./todos-action"

export const todosReducer = (state = [], action) => {
    switch(action.type) {
        case(ADD_TODOS): {
            return action.
        }
        default: {
            return state
        }
    }
}