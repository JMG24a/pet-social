import React from 'react';
import {Anchor, Image} from './styles'


function Category({ cover = DEFAULT_IMAGE, path, emoji = '?' }){
    return(
        <Anchor src={path}>
            <Image src={cover}/>
            {emoji}
        </Anchor>
    ) 
}

export {Category}