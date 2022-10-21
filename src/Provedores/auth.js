import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const [image, setImage] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        const imageStorage = localStorage.getItem('image')
        const tokenStorage = localStorage.getItem('token')
        if(userStorage){
            setUser(JSON.parse(userStorage))
            setImage(JSON.parse(imageStorage))
            setToken(JSON.parse(tokenStorage))
        } else {
            setUser('')
            setImage('')
            setToken('')
        }
    }, [])
   
    return (
        <AuthContext.Provider value={{token, setToken, user, setUser, password, setPassword, image, setImage}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)
