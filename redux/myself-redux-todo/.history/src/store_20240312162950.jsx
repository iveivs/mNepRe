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
            return state.map((todo) => 
            todo.id === action.id
                ? {...todo, complited: !todo.complited} : todo)
        }
        default: {
            return state
        }
    }
}

export const store = createStore(todos)

export const addTodo = (title) => ({
    type: "ADD_TODO",
    title
})

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});