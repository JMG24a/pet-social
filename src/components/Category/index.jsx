import React from 'react';
import {Anchor, Image} from './styles'

const styleds = {
    "text-decoration": "none"
}

function Category({category}){

    return(
        <Anchor styled={styleds} to={`/pet/${category.id}`}>
            <Image src={category.cover}/>
            {category.emoji}
        </Anchor>
    ) 
}

export {Category} 