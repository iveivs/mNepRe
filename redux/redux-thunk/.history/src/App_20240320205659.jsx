import { Users } from './components/Users'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import

import './App.css'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <h1>Redux-Thunk</h1>
      <Users />
    </>
  )
}

export default App
