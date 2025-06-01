import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider  =({children})=>{
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [isSeller,setIsSeller] = useState(null);
    const [showUserLogin,setShowUserlogin] = useState(false);

    const value={user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserlogin};

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppcontext = ()=>{
    return useContext(AppContext);
}