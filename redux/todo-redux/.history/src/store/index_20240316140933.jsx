import { createStore } from "redux";

import { rootReducer } from './root-reducer'

import { loadState } from "./todos/local-storage";

export const store = createStore(rootReducer);