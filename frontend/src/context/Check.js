import React from 'react'

export const LoginContext = React.createContext()

export const CheckLoginContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false)

    const handelLogin = () => {
        setIsAuth(true)
    }

    const handelLogout = () => {
        setIsAuth(false)
    }

    const value = {isAuth, handelLogin, handelLogout}

    return (
        <LoginContext.Provider value = {value}> {children}</LoginContext.Provider>
    )
}