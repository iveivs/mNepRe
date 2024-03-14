export const allTodos = (state) => state.todos

export const activeTodos = (state) => state.todos.filter(todo => todo.completed === false)

export const selectVisibleTodos = (state, filter) => {
    switch(filter){
        case 'all':
            return state.t
        default: {
            state.todos
        }
    }
}