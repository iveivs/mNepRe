import { createContext, useReducer } from "react";
import

export const ShopContext = createContext()

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