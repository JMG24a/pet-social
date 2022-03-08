//react
import React from 'react';
//graphql
import { useQuery } from "@apollo/client";
import { withPhotos } from '../../context/whitPhotos';
//components
import { PhotoCard } from '../../components/PhotoCard';
import { Loading } from '../../components/Loading';

function ListOfPhotoCard({categoryId}){

    const { 
        loading, 
        error, 
        data 
    } = useQuery(withPhotos,{ variables: { categoryId: categoryId } });

    const centerLoading = {
        position: "relative"
    }


    return(
        <div style={centerLoading}> 
            {!!loading && <Loading/>}
            {!!error && !loading && <p>ERROR</p>}
            {!loading && !error && 
                <ul>
                    {data.photos.map(card => (
                        <li key={card.id}>
                            <PhotoCard 
                                {...card}
                            />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export { ListOfPhotoCard }