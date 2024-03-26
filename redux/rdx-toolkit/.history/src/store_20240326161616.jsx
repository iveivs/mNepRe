import { createStore } from "redux";
import { createAction, nanoid, createReducer } from "@reduxjs/toolkit";

// new

export const addTodo = createAction('@@todos/ADD_TODO', (title) => ({
    payload: {
        title,
        id: nanoid(),
        competed: false
    },
}))

// old
// actions
// export const addTodo = (title) => ({
//     type: "ADD_TODO",
//     title
// })

export const removeTodo = createAction('@@todos/REMOVE_TODO')
export const toggleTodo = createAction('@@todos/TOGGLE_TODO')


const todos = createReducer([], (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            state.push(action.payload)
            // или
            // const newTodo = action.payload
            // state.push(newTodo)
        })
        .addCase(removeTodo, (state, action) => {
            const id = action.payload
            return state.filter(todo => todo.id !== id )
        })
        .addCase(toggleTodo, (state, action) => {
            const id = action.payload
            const todo = state.find(todo => todo.id === id)
            todo.competed = !todo.competed
        })
})

// old reducer
// const todos = (state = [], action) => {
//     switch(action.type) {
//         case addTodo.toString(): {
//             return [...state, 
//                 {
//                     ...action.payload
//                 }
//             ]
//         }
//         case removeTodo.toString(): {
//             console.log('test');
//             return state.filter((todo)=> todo.id !== action.payload)
                    
//         }
//         case removeTodo.toString(): {
//             return state.map((todo) => 
//             todo.id === action.payload
//                 ? {...todo, complited: !todo.complited} : todo)
//         }
//         default: {
//             return state
//         }
//     }
// }

export const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

