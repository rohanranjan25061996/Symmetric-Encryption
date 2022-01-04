import React from 'react'
import {LoginContext} from "../context/Check"
import Login from "./Login"
import Dashboard from "./Dashboard"

const Main = () => {

    const { isAuth } = React.useContext(LoginContext)
    return (
        <>
        {isAuth ? <Dashboard /> : <Login />}
        </>
    )
}

export default Main