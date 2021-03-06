import styled from 'styled-components';
import { Link as FavLink } from 'react-router-dom';


export const Grid = styled.div`
    padding-top: 32px;
    display: inline;
`

export const Link = styled(FavLink)`
    border-radius:  8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    &:after{
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`