export const userReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_USERS: {
            return action
        }
        default: 
            return state
    }
}