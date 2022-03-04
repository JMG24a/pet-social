import React from "react";
import  { ListOfCategories } from '../containers/ListOfCategoryes'
import { GlobalStyles } from '../globalStyles'

function App(){
    return(

        <>
            <GlobalStyles/>
            <h1>PET SOCIAL</h1>
            <ListOfCategories/>
        </>
    )
}

export {App}