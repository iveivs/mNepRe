import { createStore } from "redux";

import { rootReducer } from './r'

export const store = createStore(rootReducer);