import { createContext } from "react";

export const ShopContext = createContext()

export const ContextProvider = ({children}) => {
    const value = {
        example = 'Hello from Context'
    }
    return < ShopContext.Provider >
                {children}
    </ShopContext.Provider>
}