import { SET_THEME } from "./theme-actions";

export const themeReducer = (state = 'light', {type, payload}) => {
    switch(type) {
        case SET_THEME:
            return p
        default: 
            return state
    }
}