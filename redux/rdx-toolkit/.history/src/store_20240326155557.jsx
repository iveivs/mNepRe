import { createStore } from "redux";
import { createAction, nanoid } from "@reduxjs/toolkit";

// new

export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
    payload: {
        title,
        id: nanoid(),
        competed: false
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

export const removeTodo = createAction('@@todos/REMOVE_TODO')
export const toggleTodo = createAction('@@todos/TOGGLE_TODO')

const todos = (state = [], action) => {
    switch(action.type) {
        case addTodo.toString(): {
            return [...state, 
                {
                    ...action.payload
                }
            ]
        }
        case removeTodo.: {
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

