import React, { useContext, Suspense } from "react";
import { Context } from "../context";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import { Home } from '../pages/Home'
import { Detail } from "../pages/Detail";
import { Nav } from "../components/Nav";
import { NoAuth } from '../pages/NoAuth';
//import ListOfFavorites from "../pages/ListOfFavorites";
import { User } from "../pages/User";
import { NotFound } from "../pages/NotFount";
//styles
import { GlobalStyles } from '../styles/globalStyles'

const ListOfFavorites = React.lazy(() => import('../pages/ListOfFavorites'))



function App(){

    const{
        isAuth
    } = useContext(Context);

    return(
        <Suspense fallback={<div/>}>
            <BrowserRouter>
                <GlobalStyles/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pet/:id" element={<Home/>}/>
                    <Route path="/details/:id" element={<Detail/>}/>

                    {!!isAuth?
                        <>
                            <Route path="/liked" element={<ListOfFavorites/>}/>
                            <Route path="/user" element={<User/>}/>
                        </>
                        :
                        <>
                            <Route path="/liked" element={<NoAuth/>}/>
                            <Route path="/user" element={<NoAuth/>}/>
                        </>
                    }

                    <Route path="/register" element={<NoAuth/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Nav/>
            </BrowserRouter>
        </Suspense>
    )
}

export {App}