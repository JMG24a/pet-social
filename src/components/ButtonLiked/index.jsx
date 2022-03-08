import React from 'react';
import { BsHeart, BsHeartFill} from 'react-icons/bs';
import { Button } from './styles'

function ButtonLiked({handleClick, isLike, likes}){

    const Icon = isLike ? BsHeartFill : BsHeart 

    return(
        <>
            <Button>
                <Icon 
                    size='32px' 
                    onClick={handleClick}
                /> {likes} likes!
            </Button>
        </>
    )
}

export {ButtonLiked}