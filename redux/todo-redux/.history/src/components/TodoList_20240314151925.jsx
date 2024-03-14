import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, toggleTodo } from "./store/todos/todos-actions";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions"
// import { allTodos } from "./store/todos/todos-selectors";
import { selectVisibleTodos } from "../store/todos/todos-selectors"
import { setFilter } from "../store/filters/filtres-actions";

export const TodoList = () => {
    const todos = useSelector(state => selectVisibleTodos(state));
    const dispatch = useDispatch();
    
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{" "}
                    {todo.title}{" "}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};