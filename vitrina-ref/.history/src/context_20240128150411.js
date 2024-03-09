import { createContext } from "react";

export const ShopContext = createContext()

export const ContextProvider = ({children}) => {
    const value = {
        
    }
    return < ShopContext.Provider >
                {children}
    </ShopContext.Provider>
}