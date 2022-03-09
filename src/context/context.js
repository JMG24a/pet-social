import React, {createContext, useState} from 'react';

const Context = createContext({});

export function AuthProvider({children}){
    
    const [isAuth, setIsAuth] = useState(false);

    return(
        <Context.Provider value={{isAuth, setIsAuth}}>
            {children}
        </Context.Provider>
    )
}

export {Context}