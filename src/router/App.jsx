import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import { Home } from '../pages/Home'
import { Detail } from "../pages/Detail";
import { Nav } from "../components/Nav";
//styles
import { GlobalStyles } from '../styles/globalStyles'
import { useState } from "react";


function App(){

    const [isAuth, setIsAuth] = useState(false)

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
                        <Route path="/liked" element={<p>No registrado</p>}/>
                        <Route path="/user" element={<p>No registrado</p>}/>
                    </>
                }

            </Routes>
            <Nav/>
        </BrowserRouter>
    )
}

export {App}