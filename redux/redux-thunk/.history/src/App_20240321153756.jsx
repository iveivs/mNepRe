import { Users } from './components/Users'
import { TodoList } from './components/TodoList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUsers } from './users/users-actions'

import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  return (
    <>
      <h1>Redux-Thunk</h1>
      <Users />
      
    </>
  )
}

export default App
