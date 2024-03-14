import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo, toggleTodo } from "./store/todos/todos-actions";
import { Filters } from "./components/Filters";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux Todo</h1>
            <NewTodo />
            <Filters  />
            <TodoList />
        </div>
    );
}




