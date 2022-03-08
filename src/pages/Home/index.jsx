import React from "react";
import { useParams } from "react-router-dom";
import { Logo } from '../../components/Logo'
import { ListOfCategories } from '../../containers/ListOfCategoryes'
import { ListOfPhotoCard } from '../../containers/ListOfPhotoCard'

function Home(){
    
    let { id } = useParams();
 
    return(
        <>
            <Logo/>
            <ListOfCategories/>
            <ListOfPhotoCard categoryId={id}/>
        </>
    )
}

export {Home}