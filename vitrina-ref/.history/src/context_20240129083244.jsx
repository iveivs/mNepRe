import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = { 
    goods: [],
    loading
}

export const ContextProvider = ({children}) => {
    const value = {
        example: 'Hello from Context'
    }
    return (
        < ShopContext.Provider value={value} >
                {children}
        </ShopContext.Provider>
    )
}