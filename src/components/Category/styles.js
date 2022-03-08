import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Anchor = styled(Link)`
    width: 75px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
`

export const Image = styled.img`
    width: 75px;
    height: 75px;
    border: 1px solid #ddd;
    border-radius: 50%;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    overflow: hidden;
    object-fit: cover;
`