import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MySelf Redux ToDo</h1>
    </>
  )
}

export default App
