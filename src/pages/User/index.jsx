import React, { useContext } from 'react';
import { Logo } from '../../components/Logo';
import { Context } from '../../context/index';
import { Wrapper, Image, Button } from './styles'
//Seo
import { Helmet } from 'react-helmet'

function User(){

    const{
        removeAuth
    } = useContext(Context)

    return(
        <>
            <Helmet>
                <title>Pet-social - Config</title>
                <meta name='description' content='Pudes cerrar la sesion para estar mas seguro'/>
            </Helmet>

            <Logo/>
            
            <Wrapper>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-59VyFLAfWXW0BSup1_Aac0KjOe8M7hPMQ&usqp=CAU" alt="foto" />
            </Wrapper>


            <Button
                onClick={()=>removeAuth()}
            >
                Cerrar Sesion
            </Button>
        </>
    )
}

export {User}