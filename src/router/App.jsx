import React, { useContext } from "react";
import { Context } from "../context/context";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import { Home } from '../pages/Home'
import { Detail } from "../pages/Detail";
import { Nav } from "../components/Nav";
import { NoAuth } from '../pages/NoAuth'
//styles
import { GlobalStyles } from '../styles/globalStyles'


function App(){

    const {isAuth, setIsAuth} = useContext(Context);

    return(
        <BrowserRouter>
            <GlobalStyles/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pet/:id" element={<Home/>}/>
                <Route path="/details/:id" element={<Detail/>}/>

                {!!isAuth?
                    <>
                        <Route path="/liked" element={<p>Registrado</p>}/>
                        <Route path="/user" element={<p>Registrado</p>}/>
                    </>
                    :
                    <>
                        <Route path="/liked" element={<NoAuth/>}/>
                        <Route path="/user" element={<NoAuth/>}/>
                    </>
                }

                <Route path="/register" element={<NoAuth/>}/>

            </Routes>
            <Nav/>
        </BrowserRouter>
    )
}

export {App}