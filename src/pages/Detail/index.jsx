import React from 'react';
import { useParams } from 'react-router-dom';
import { Description } from '../../containers/Description';
import { Logo } from '../../components/Logo';
import { Helmet } from 'react-helmet'

function Detail(){

    let { id } = useParams();
   
    return(
        <>
            <Helmet>
                <title>Pet-social - Detalle</title>
                <meta name='description' content='Pudes cerrar la sesion para estar mas seguro'/>
            </Helmet>

            <Logo/>
            <Description id={id}/>
        </>
    )
}

export {Detail}