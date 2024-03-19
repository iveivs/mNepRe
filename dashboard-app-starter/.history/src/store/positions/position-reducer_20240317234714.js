import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            console.log('ACTION POSITION');
            return action.positions
        }
        default: {
            return state
        }
            
    }
}