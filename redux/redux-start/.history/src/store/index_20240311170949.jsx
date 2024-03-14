import { createStore } from "redux";

const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            console.log(state);
            return { ...state, counter: state.counter + 1 }
        }
        case "DECREMENT": {
            return state.counter - 1
        }
        case "RESET": {
            return 0
        }
        default: {
            return state
        }
    }
}

export const store = createStore(counter)

// actions
export const increment = { type: "INCREMENT"}
export const decrement = { type: "DECREMENT"}
export const reset = { type: "RESET"}