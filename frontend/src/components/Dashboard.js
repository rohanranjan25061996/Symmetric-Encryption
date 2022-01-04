import React from "react";
import { LoginContext } from "../context/Check";

const Dashboard = () => {
    const {handelLogout} = React.useContext(LoginContext)
    return(
        <>
        <div>
            <h1>Login successfully !...., Now you are on Dashboard</h1>
        </div>
        <div>
            <button onClick = {handelLogout}>LOGOUT</button>
        </div>
        </>
    )
}

export default Dashboard