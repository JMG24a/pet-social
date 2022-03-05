import React from 'react';
import { Button, ImgWrapper, Img } from './styles'
import { BsHeart } from 'react-icons/bs'
const deaultPhoto = "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg"

function PhotoCard({ likes = 0,}){
    return(
        <article>
            <a href={`product`}>
                <ImgWrapper>
                    <Img src={deaultPhoto} alt="foto por defecto" />
                </ImgWrapper>
            </a>
            <Button>
                <BsHeart size='32px' /> {likes} likes!
            </Button>
        </article>
    )
}

export {PhotoCard}