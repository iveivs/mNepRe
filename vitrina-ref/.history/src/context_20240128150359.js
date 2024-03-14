import { createContext } from "react";

export const ShopContext = createContext()

export const ContextProvider = ({children}) => {
    return < ShopContext.Provider >
                {children}
    </ShopContext.Provider>
}