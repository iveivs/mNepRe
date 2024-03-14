import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store";

function App() {

  return (
    <>
      <h1>MySelf Redux ToDo</h1>
      <NewTodo  />
    </>
  )
}

export default App

const NewTodo = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder='new todo'/>
      <input type="submit" value="Add todo" />
    </form>
    </>
  )
}

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          
        </li>
      ))}
    </ul>
  )
}
