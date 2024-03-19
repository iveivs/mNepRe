import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReducer = (state =[], action) => {
    switch(action.type) {
        case ADD_FILTER: {
            return [...state, action.filter]
        }
        case ADD_FILTER: {
            return [...state, action.filter]
        }
        case CLEAR_FILTER: {
            return []
        }
        default: {
            return state
        }
    }
}