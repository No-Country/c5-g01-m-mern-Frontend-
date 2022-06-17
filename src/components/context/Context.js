import { createContext,useState } from "react";

export const Context = createContext()//estados, acciones GLOBALES
const ContextProvider = ({children}) =>{
     const [user, setUserInfo] = useState([])

    return ( 
        <ContextProvider.Provider value={{
            user,setUserInfo,

            
            }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default CartContextProvider