import React from 'react';
//graphql
import { useQuery } from "@apollo/client";
import { getPhoto } from '../../context/schemas/getPhoto';
//components
import { PhotoCard } from '../../components/PhotoCard';
import { Loading } from '../../components/Loading';

function Description({id}){

    const { 
        loading, 
        error, 
        data 
    } = useQuery(getPhoto,{ variables: { id: id } });

    const centerLoading = {
        position: "relative"
    }

    return(
        <div style={centerLoading}> 
            {!!loading && <Loading/>}
            {!!error && !loading && <p>ERROR</p>}
            {!loading && 
            <div>
                <PhotoCard {...data.photo}/>
            </div>
            }
        </div>
    )
}

export {Description}