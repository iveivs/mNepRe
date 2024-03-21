import { useSelector } from "react-redux"
export const TodoList = () => {
    const todos = useSelector(state => state.todos)
    return (
        <>
        <input type="text"  placeholder="Some Text"/>
        <h2>Todos</h2>
        </>
    )
}