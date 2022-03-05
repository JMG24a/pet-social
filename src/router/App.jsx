import React from "react";
//components
import { Logo } from '../components/Logo'
import { ListOfCategories } from '../containers/ListOfCategoryes'
import { ListOfPhotoCard } from '../containers/ListOfPhotoCard'
//styles
import { GlobalStyles } from '../styles/globalStyles'

function App(){
    return(
        <>
            <GlobalStyles/>
            <Logo/>
            <ListOfCategories/>
            <ListOfPhotoCard/>
        </>
    )
}

export {App}