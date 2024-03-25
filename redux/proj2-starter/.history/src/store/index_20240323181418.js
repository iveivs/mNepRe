import axios from "axios";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";
import * 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
        })
    )
))