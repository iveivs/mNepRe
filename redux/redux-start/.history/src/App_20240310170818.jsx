import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { createStore, combineReducers } from 'redux'
import { useSelector, useD } from 'react-redux'


function App() {
  // const initialState = 0
  // const counterReducer = (state = 0, action) => {
  //   if(action.type === 'INCREMENT'){
  //     return state + 1
  //   }

  //   return state
  // }

  // const todoReducer = (state = [], action) => {
  //   if(action.type === 'ADD_TODO'){
  //     return [...state,'Learn Redux']
  //   }
  //   return state
  // }

  // const rootReducer = combineReducers({
  //   counter: counterReducer,
  //   todo: todoReducer,
  // })

  // const store = createStore(rootReducer)
  // console.log(store.getState());

  // store.dispatch({type: 'INCREMENT'})
  // console.log(store.getState());

  // store.dispatch({type: 'ADD_TODO'})
  // console.log(store.getState());




  return (
    <>
      <h1>Hello Redux</h1>
      < Counter />
    </>
  )
}

const Counter = () => {
  return (
    <div>
      <h2>0</h2>
      <button>+</button>
      <button>-</button>
      <button>reset</button>
    </div>
  )
}

export default App
