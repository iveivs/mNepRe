import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createStore, combineReducers } from 'redux'

function App() {
  // const initialState = 0


  const counerReducer = (state = 0, action) => {
    if(action.type === 'INCREMENT'){
      return state + 1
    }

    return state
  }

  const todoReducer = (state = [], action) => {
    if(action.type === 'ADD_TODO'){
      return [...state,'Learn Redux']
    }

    return state
  }

  const rootReducer = combineReducers({
    counter: counerReducer,
    
  })

  const store = createStore(counerReducer)
  console.log(store.getState());

  store.dispatch({type: 'INCREMENT'})
  console.log(store.getState());

  return (
    <>
      
    </>
  )
}

export default App
