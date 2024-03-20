import { Users } from './components/Users'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './App.css'

function App() {

  return (
    <>
      <h1>Redux-Thunk</h1>
      <Users />
    </>
  )
}

export default App
