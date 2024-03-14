import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createStore } from 'redux'

function App() {
  const initialState = {}


  const reducer = (state, action) => {
    if(action.type === 'INCREMENT'){
      return state + 1
    }

    return state
  }

  const store = createStore(reducer)

  return (
    <>
      
    </>
  )
}

export default App
