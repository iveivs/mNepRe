import { createStore } from "redux";

import { rootReducer } from './root-reducer'

import { loadState, saveState } from "./local-storage";

// export const store = createStore(rootReducer);

export const configureStore = () => {
    const persistedState = loadState()

    const store = createStore(
        rootReducer, 
        persistedState,  
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    store.subscribe
    return store
}