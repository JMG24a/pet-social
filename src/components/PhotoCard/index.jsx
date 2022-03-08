import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//hook
import { useIntersection } from '../../hook/useIntersection';
import { useLocalStorage } from '../../hook/useLocalStorage';
import { useMuationToogleLike } from '../../hook/useMutationToggleLike';
//comnponents
import { ButtonLiked } from '../ButtonLiked';
//styles
import { ImgWrapper, Img, Article } from './styles';

const deaultPhoto = "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg"

function PhotoCard({id, likes, src}){

    const key = `Like-${id}`
    const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
    const [isShow, ref] = useIntersection()
    const [getData, setData] = useLocalStorage();
    const [isLike, setIsLike] = useState(getData(key));

    const handleClick = () =>{
        !isLike && mutation({
            variables: {
              input: { id }
            }
          })
        setIsLike(!isLike)
        setData(key, !isLike)
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
                        isLike={isLike}
                        handleClick={handleClick}
                    />
                </>
            }
        </Article>
    )
}

export {PhotoCard}