import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
//hook
import { useIntersection } from '../../hook/useIntersection';
import { useLikeMuation } from '../../context/schemas/likedMutation';
//comnponents
import { ButtonLiked } from '../ButtonLiked';
//styles
import { ImgWrapper, Img, Article } from './styles';

function PhotoCard({id, likes, src, liked = true}){

    const { likedMutation } = useLikeMuation();
    const [isShow, ref] = useIntersection();

    const handleClick = () =>{
        likedMutation({
            variables: {
              input: { id }
            }
          })
    }

    return(
        <Article ref={ref}>
            {!!isShow &&
                <>
                    <Link to={`/details/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="Foto" />
                        </ImgWrapper>
                    </Link>
                    <ButtonLiked
                        likes={likes}
                        isLike={liked}
                        handleClick={handleClick}
                    />
                </>
            }
        </Article>
    )
}

export {PhotoCard}