import { createStore } from "redux";

import { rootReducer } from './root-reducer'

import { load}

export const store = createStore(rootReducer);