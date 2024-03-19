import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            console.log('object');
            return action.positions
        }
        default: {
            return state
        }
            
    }
}