import React from 'react';
import { Grid, Link, Image } from './styles'



function FavoritesCard({id, src}){
    return(
        <Grid>
            <Link to={`/details/${id}`}>
                <Image src={src} alt="Foto" />
            </Link>
        </Grid>
    )
}

export {FavoritesCard}