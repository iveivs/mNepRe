import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
imp
export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)