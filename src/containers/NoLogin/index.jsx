import React, { useContext } from 'react';
import { useInputValue } from '../../hook/useInputValue';
import { Context } from '../../context/context';
//styles
import { Form, Label, Input, Button} from './styles'

function NoLogin(){

    const{
        setIsAuth
    } = useContext(Context)

    let email = useInputValue('');
    let password = useInputValue('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsAuth(true)
    }

    return(
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
        </>
    )
}

export { NoLogin }