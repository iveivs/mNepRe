import { createStore } from "redux";

const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state,
                counter
            }
        }
        case "DECREMENT": {
            return state.counter - 1
        }
        case "RESET": {
            return 0
        }
        default: {
            return state.counter
        }
    }
}

export const store = createStore(counter)

// actions
export const increment = { type: "INCREMENT"}
export const decrement = { type: "DECREMENT"}
export const reset = { type: "RESET"}