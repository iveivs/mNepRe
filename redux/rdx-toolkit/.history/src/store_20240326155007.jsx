import { createStore } from "redux";
import { createAction, nanoid } from "@reduxjs/toolkit";

// new

export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
    payload: {
        title,
        id: nanoid()
    },
}))

console.log(addTodo);
console.log(addTodo.toString());
console.log(addTodo());
console.log(addTodo('some string'));
// old
// actions
// export const addTodo = (title) => ({
//     type: "ADD_TODO",
//     title
// })

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});

const todos = (state = [], action) => {
    switch(action.type) {
        case addTodo.toString(): {
            return [...state, {
                id: Date.now(),
                title: action.payload,
                complited: false
            }]
        }
        case "REMOVE_TODO": {
            console.log('test');
            return state.filter((todo)=> todo.id !== action.id)
                    
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

export const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

