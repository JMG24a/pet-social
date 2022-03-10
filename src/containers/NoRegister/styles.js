import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 250px;
`

export const Form = styled.form`
    width: 80%;
    height: auto;
    margin: 0 auto;
    padding: 10px;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: black;
    font-size: 1.4rem;
    font-weight: 300;
`

export const Input = styled.input`
    width: 100%;
    height: 25px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 4px grey;
    margin-bottom: 20px;
`

export const Button = styled.button`
    width: 60%;
    background-color: #8080802e;
    margin-left: calc(50% - 30%);
    height: 25px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px grey;
`

export const Error = styled.p`
    width: 70%;
    margin: 10px auto;
    padding: 5px;
    background-color: #9d938c;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 1.2rem;
`