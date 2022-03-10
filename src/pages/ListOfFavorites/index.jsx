import React from 'react';
//graphql
import { useQuery } from '@apollo/client';
import { getFavorites } from '../../context/schemas/getFavorites'
import { FavoritesCard } from '../../components/FavoritesCard';
import { Loading } from '../../components/Loading';
import { Logo } from '../../components/Logo';
import { Wrapper } from './styles';
//Seo
import { Helmet } from 'react-helmet'

export default () =>{

    const{
        loading,
        error,
        data
    } = useQuery(getFavorites, { fetchPolicy: 'cache-and-network' })

    console.log("listF: ",data)

    return(
        <>
            <Helmet>
                <title>Pet-social - Tus Favoritos</title>
                <meta name='description' content='Aquí puedes ver un historial de las mascotas que te encantan'/>
            </Helmet>

            {!!loading ?
                <Loading/>
                :
                <>  
                    <Wrapper>
                        <Logo/>
                        <h3>Tus Favoritos</h3>
                    </Wrapper>
                    {data.favs.map(card =>(
                        <FavoritesCard
                            key={card.id}
                            {...card}
                        />
                    ))}
                </>
            }
            {!!error &&
                <h3>Error de Network</h3>
            }
        </>
    )
}
