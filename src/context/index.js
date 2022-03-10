import React, {createContext, useState} from 'react';

const Context = createContext({});

export function AuthProvider({children}){
    
    const [isAuth, setIsAuth] = useState(() =>{
        return window.sessionStorage.getItem('token')
    });

    const auth = (token) =>{
        window.sessionStorage.setItem('token', token)
        setIsAuth(true)
    }

    const removeAuth = () =>{
        window.sessionStorage.removeItem('token')
        setIsAuth(false)
    }

    return(
        <Context.Provider value={{
            isAuth,
            auth,
            removeAuth
        }}>
            {children}
        </Context.Provider>
    )
}

export {Context}