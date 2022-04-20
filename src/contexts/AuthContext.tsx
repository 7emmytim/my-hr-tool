import { createContext, useContext, useState } from "react";

const authContext = createContext<any>([])

export const AuthProvider = ({ children }: any) => {

    const [auth, setAuth] = useState(false)

    const login: any = () => setAuth(true)
    const logout: any = () => setAuth(false)

    const changeAuth = (type: string) => {
        if (type === 'login') {
            login()
        } else if (type === 'logout') {
            logout()
        }
    }

    return (
        <authContext.Provider value={[auth, changeAuth]}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)