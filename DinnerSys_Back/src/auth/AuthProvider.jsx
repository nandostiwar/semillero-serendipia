import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => { }
});
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("User")
    );
    const obtenerId = () =>{
        const userId = JSON.parse(localStorage.getItem("User"));
        if(userId){
            return userId.id;
        }else{
            return null;
        }
    }
    const [UserId, setUserId] = useState(obtenerId);
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, UserId }}>
            {children}
        </AuthContext.Provider>
    );
}
