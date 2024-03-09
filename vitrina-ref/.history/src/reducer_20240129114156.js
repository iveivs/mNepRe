export function reducer(state, {type, payload}) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                o
            }
    
        default:
            return state
    }
}