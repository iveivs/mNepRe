import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReducer = (state =[], action) => {
    switch(action.type) {
        
        case CLEAR_FILTER: {
            return []
        }
        default: {
            return state
        }
    }
}