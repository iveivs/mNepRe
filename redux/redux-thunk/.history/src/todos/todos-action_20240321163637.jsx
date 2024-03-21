import { client } from "../api"

export const ADD_TODOS = 'ADD_TODOS'

export const addTodos = (todos) => ({
        type: ADD_TODOS,
        payload: todos
})
// Второй вариант
export const loadTodos = () => (dispatch) => {
    client('https://jsonplaceholder.typicode.com/todos')
    .then(data => dispatch(addTodos(data)))
    .catch(err => console.log(err))
}





//  первый вариант
// export const loadTodos = () => (dispatch) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => dispatch(addTodos(data)))
// }