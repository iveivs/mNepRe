import { useState } from 'react'
import './App.css'
import { Provider } from "react-redux";
import { store } from './store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux ToDo</h1>
    </>
  )
}

export default App