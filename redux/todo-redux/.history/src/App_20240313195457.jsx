import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store/todos/todos-actions";
import { allTodos } from "./store/todos/todos-selectors";
import { Filters } from "./components/Filters";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux Todo</h1>
            <NewTodo />
            <TodoList />
        </div>
    );
}




