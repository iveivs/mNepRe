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
                order: order.filter((el) => el.mainId !== payload.id)
            }
        case 'ADD_TO_BASKET':
    
        default:
            return state
    }
}