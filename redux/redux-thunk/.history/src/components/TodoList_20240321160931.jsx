import { useSelector } from "react-redux"
export const TodoList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <>
        <input type="text"  placeholder="Some Text"/>
        <h2>Todos:</h2>
        <div>{todos.length}</div>
        {todos.map(todo => (
            <div>{todo.title}</div>
        ))}
        </>
    )
}