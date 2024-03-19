import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state =[], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            return action.pos
        }
            
            break;
    
        default: {
            return state
        }
            
    }
}