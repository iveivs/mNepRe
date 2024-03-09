export function reducer(state, {type, payload}) {
    switch (type) {

        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                })
            }

        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        
        case 'TOGGLE_BASKET'

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

        case 'ADD_TO_BASKET': {
            // чтоб не создавать новый
        const itemIndex = state.order.findIndex(
            (orderItem) => orderItem.mainId === payload.id)
        
        let newOrder = null
        // если нет, то добавляем просто новый объект
        if(itemIndex < 0) {
            const newItem = {
                ...payload,
                quantity: 1,
            }
            newOrder = [...state.order, newItem]
        }else {
            // если ранее уже был добавлен, то ищем его позицию
            newOrder = state.order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                    
                } else {
                    return orderItem
                }
            })
        }
        // setAlertName(item.displayName)
        return {
            ...state,
            order: newOrder,
            alertName: payload.displayName
        }
        }
            
    
        default:
            return state
    }
}