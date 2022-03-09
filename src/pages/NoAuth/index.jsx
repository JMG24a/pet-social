import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { Session } from '../../containers/Session';
import { NoLogin } from '../../containers/NoLogin';
import { NoRegister } from '../../containers/NoRegister'
//styles
import { Wrapper } from './styles'

function NoAuth(){

    let location = useLocation()

    const [getURL, setURL] = useState({
        text_top: 'Inicia sesion con tu cuenta de pet-social y descubre el increible mundo de las mascotas',
        text_bottom: '¿No tienes una cuenta?',
        button: 'Registrate',
        url: '/register'
    })

    useEffect(()=>{
        if(location.pathname === '/register'){
            setURL({
                text_top: 'Crea una cuenta de pet-social y descubre el increible mundo de las mascotas',
                text_bottom: '¿Ya tienes una cuenta?',
                button: 'Inicia Sesion',
                url: '/user'
            })
        }
        else{
            setURL({
                text_top: 'Inicia sesion con tu cuenta de pet-social y descubre el increible mundo de las mascotas',
                text_bottom: '¿No tienes una cuenta?',
                button: 'Registrate',
                url: '/register'
            })
        }
    },[location.pathname])

    return(
        <>  
            <Wrapper>
                <Logo/>
            </Wrapper>

            <Session {...getURL}>
                {location.pathname !== '/register'?
                    <NoLogin/>
                    :
                    <NoRegister/>
                }

            </Session>
        </>
    )
}

export {NoAuth}