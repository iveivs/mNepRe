import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ 