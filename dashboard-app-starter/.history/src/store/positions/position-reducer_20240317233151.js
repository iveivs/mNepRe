import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            console.log('TEST 0');
            return action.positions
        }
        default: {
            return state
        }
            
    }
}