import { createStore } from "redux";

import { rootReducer } from './root-reducer'

import { loadState } from "./local-storage";

// export const store = createStore(rootReducer);

export const configureStore = () => {
    return createStore(
        rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}