import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Registro } from '../../context/mutateRegister';
import { useQuery } from "@apollo/client";
import { useInputValue } from '../../hook/useInputValue';
import { Context } from '../../context/context';
//styles
import { Form, Label, Input, Button} from './styles'

function NoRegister(){

    const navigate = useNavigate()

    const{
        setIsAuth
    } = useContext(Context)

    let email = useInputValue('');
    let password = useInputValue('');

    const handleSubmit = (e) =>{
        e.preventDefault()

        const input = {
            email: email.getValue,
            password: password.getValue
        }

        const { 
            loading, 
            error, 
            data 
        } = useQuery(Registro,{ variables: { input: input } });

        console.log(data)
        setIsAuth(true)
        navigate('/user')
    }


    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input 
                    type="text" 
                    id='email'
                    placeholder='example@domine.com'
                    value={email.getValue} // <- asi
                    onChange={(e) => email.onChange(e)} // <-asi
                />

                <Label htmlFor="email">Contraceña</Label>
                <Input 
                    type="text"
                    id='password'
                    placeholder='Contraceña'
                    {...password} // o asi
                />

                <Label htmlFor="email">Confirmar contraceña</Label>
                <Input 
                    type="text"
                    id='password_confirmed'
                    placeholder='Contraceña'
                />

                <Button
                    type="submit"
                >
                    Crear
                </Button>
            </Form>   
        </>
    )
}

export { NoRegister }