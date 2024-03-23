import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {

    const [user, setUser] = useState(localStorage.getItem('Username'));


    const Login = (name) => {
        localStorage.setItem('Username', name);
        setUser(name);
    }

    const GetUsername = () => {
        let name = localStorage.getItem('Username');
        console.log(name);
        setUser(name)
        return name ? name : null
    }

    const ClearStorage = () => {
        localStorage.clear()
    }

    const Logout = () => {
        setUser(null);
        ClearStorage()
        
    }

    return (
        <AuthContext.Provider value={{user, Login, GetUsername, Logout, ClearStorage}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}




