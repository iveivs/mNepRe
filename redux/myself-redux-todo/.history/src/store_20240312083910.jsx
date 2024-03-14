import { createStore } from "redux";

const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO": {
            return [...state, {
                id: Date.now(),
                title: action.title,
                complited: false
            }]
        }
        case "REMOVE_TODO": {
            return state.filter((todo)=> todo.id !== action.todo)
        }
        case "TOGGLE_TODO": {
            return state.map((todo) => todo.id === action.id)
        }
    }
}