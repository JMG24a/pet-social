import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Paragrafo, Section, Logo} from './styles'



function Session({children, text_top, text_bottom, button, url}){
    return(
        <Wrapper>
            <Section>
                <Logo src='https://png.pngtree.com/element_our/png_detail/20180926/pets-vector-logo-template-this-cat-and-dog-logo-could-be-png_113817.jpg'/>
                <Paragrafo>
                    {text_top}
                </Paragrafo>
            </Section>

            <div>
                {children}
            </div>

            <Paragrafo>
                {text_bottom} <Link to={url}>{button}</Link>
            </Paragrafo>
        </Wrapper>
    )
}

export {Session}