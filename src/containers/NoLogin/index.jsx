import React, { useContext } from 'react';
import { useInputValue } from '../../hook/useInputValue';
import { Context } from '../../context';
import { useLoginMutation } from '../../context/schemas/loginMutation';
//conponents
import { Loading } from '../../components/Loading'
//styles
import { Wrapper, Form, Label, Input, Button, Error } from './styles'

function NoLogin(){

    const{
        auth
    } = useContext(Context)

    const { loginMutation, loading, error } = useLoginMutation()

    let email = useInputValue('');
    let password = useInputValue('');

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const input = { 
            email: email.getValue,
            password: password.getValue
        }

        const variables = { input }

        try{
            const { data } = await loginMutation({variables})
            auth(data.login)
        }
        catch(e){
            console.log('error clave incorrecta')
        }
    }

    return(
        <>
            {!!loading ?
                <Wrapper>
                    <Loading/>
                </Wrapper>
                :
                <>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="email">Correo</Label>
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
                        <Button
                            type="submit"
                        >
                            Iniciar Sesión
                        </Button>
                    </Form>
                    {!!error &&
                        <Error>Correo o contraceña, incorrectas</Error>
                    } 
                </>
            }

        </>
    )
}

export { NoLogin }