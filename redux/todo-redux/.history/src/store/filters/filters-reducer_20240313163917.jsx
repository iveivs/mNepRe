import { SET_FILTER } from './folters-const'

export const filters = (state = 'all', action) => {
    switch (action.type){
        case SET_FILTER: {
            
        }
        default: {
            return state
        }
    }
}