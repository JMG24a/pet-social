import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useRegisterMutation } from '../../context/schemas/registerMutation';
import { useInputValue } from '../../hook/useInputValue';
import { Context } from '../../context';
//components
import { Loading } from '../../components/Loading'
//styles
import { Wrapper, Form, Label, Input, Button, Error} from './styles';

function NoRegister(){

    const navigate = useNavigate()
    const { registerMutation, loading, error } = useRegisterMutation()

    const [getErrorValidation, setErrorValidation] = useState(false)

    const{
        auth
    } = useContext(Context)

    let email = useInputValue('');
    let password = useInputValue('');
    let password2 = useInputValue('');

    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(password.getValue === password2.getValue){
            const input = {
                email: email.getValue,
                password: password.getValue
            }
    
            const variables = { input }
            
            try{
                const {data} = await registerMutation({ variables })
                auth(data.signup)
                navigate('/user')
            }catch(e){
                console.log('error las contraceñas no coinciden')
            }
        }else{
            setErrorValidation(true)
        }
    }

    //console.log(error)
    return(
        <>  
            {!!loading ? 
                <Wrapper>
                    <Loading/>
                </Wrapper>
                :
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
    
                    <Label htmlFor="password">Contraceña</Label>
                    <Input 
                        type="text"
                        id='password'
                        placeholder='Contraceña'
                        {...password} // o asi
                    />
    
                    <Label htmlFor="password_confirmed">Confirmar contraceña</Label>
                    <Input 
                        type="text"
                        id='password_confirmed'
                        placeholder='Contraceña'
                        {...password2}
                    />
    
                    <Button
                        type="submit"
                    >
                        Crear
                    </Button>
                </Form> 
                {!!error &&
                    <Error>El email ya fue registrado</Error>
                }
                {!!getErrorValidation &&
                    <Error>Las contraceñas no coinciden</Error>
                }
            </>
            }
  
        </>
    )
}

export { NoRegister }