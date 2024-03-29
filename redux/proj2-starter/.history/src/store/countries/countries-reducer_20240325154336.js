import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions"

const initialState = {
    status: 'idel', // loading | received | rejected
    error: null,
    list: []
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                
            }
        case SET_ERROR:
            return {}
        case SET_COUNTRIES:
            return {
                ...state,
                status: 'received',
                list: payload
            }
                
        default: 
        return state
    }
}