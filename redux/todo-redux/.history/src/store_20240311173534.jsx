import { createStore } from "redux";

const todo = (state = [], action) => {
    switch(action.type)  {
        case "ADD_TODO": {
          return [
            ...state,
            {
              id: Date.now(),
              title: action.title,
              completed: false
            }
}