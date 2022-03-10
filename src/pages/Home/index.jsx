import React from "react";
import { useParams } from "react-router-dom";
import { Logo } from '../../components/Logo'
import { ListOfCategories } from '../../containers/ListOfCategoryes'
import { ListOfPhotoCard } from '../../containers/ListOfPhotoCard'
//SEO
import {Helmet} from 'react-helmet'

function Home(){
    
    let { id } = useParams();
 
    return(
        <>
            <Helmet>
                <title>Pet-Social - Tu app para mascotas</title>
                <meta name='description' content="Con pet-social puedes ver fotos de las mascotas mas populares del momento"/>
            </Helmet>

            <Logo/>
            <ListOfCategories/>
            <ListOfPhotoCard categoryId={id}/>
        </>
    )
}

export {Home}