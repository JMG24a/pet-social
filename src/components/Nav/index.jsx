import React from 'react';
import { NavBar, Link } from './styles';
import { BsHouse, BsHeart} from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai'

const Size = "26px"

function Nav(){
    return(
        <NavBar>
            <Link to={'/'}><BsHouse size={Size}/></Link>
            <Link to={'/liked'}><BsHeart size={Size}/></Link>
            <Link to={'/user'}><AiOutlineUser size={Size}/></Link>
        </NavBar>
    )
}

export {Nav}