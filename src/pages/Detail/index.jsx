import React from 'react';
import { useParams } from 'react-router-dom';
import { Description } from '../../containers/Description';
import { Logo } from '../../components/Logo';

function Detail(){

    let { id } = useParams();
   
    return(
        <>
            <Logo/>
            <Description id={id}/>
        </>
    )
}

export {Detail}