// import { addTodo, removeTodo, toggleTodo } from "./store/todos/todos-actions";
// import { addTodo, removeTodo, toggleTodo } from "./store/todos/todos-actions";
import { useSelector, useDispatch } from "react-redux";

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="new todo" />
            <input type="submit" value="Add Todo" />
        </form>
    );
};