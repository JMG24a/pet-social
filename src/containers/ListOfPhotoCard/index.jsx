import React from 'react';
import { PhotoCard } from '../../components/PhotoCard';

function ListOfPhotoCard(){
    return(
        <ul>
            {[1,2,3,4].map(card => (
                <li key={card}>
                    <PhotoCard/>
                </li>
            ))}
        </ul>
    )
}

export { ListOfPhotoCard }