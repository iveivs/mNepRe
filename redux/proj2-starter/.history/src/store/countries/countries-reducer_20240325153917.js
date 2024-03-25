import { SET_LOADING } from "./countries-actions"

const initialState = {
    status: 'idel', // loading | recived | rejected
    error: null,
    list: []
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            
        default: 
        return state
    }
}