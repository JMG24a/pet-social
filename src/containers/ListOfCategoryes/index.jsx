import React, { useState, useEffect } from "react";
//hook
import { useGet } from "../../hook/useGet";
//env
import { APICategories } from "../../../env";
//components
import { Category } from '../../components/Category/index'
import { Loading } from "../../components/Loading";
//styles
import { List, Item } from './styles'

function ListOfCategories(){

    const [getShowFixed, setShowFixed] = useState(false)
    const [getLoading, getCategories] = useGet(APICategories)

    useEffect(()=>{
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            getShowFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
      
        document.addEventListener('scroll', onScroll)
    
        return () => document.removeEventListener('scroll', onScroll)
    },[getShowFixed])

    const showCategories = (fixed) =>{
        return(
            <List fixed={fixed}>
                {getCategories.map(category => (
                    <Item key={category.id}>     
                        <Category category={category}/>
                    </Item>
                ))}
            </List>
        )
    }

    return(
        <>
            {!!getLoading ? 
                <Loading/>
                :
                <>
                    {showCategories(false)}
                    {!!getShowFixed && showCategories(true)}
                </>
            }
        </>
    )
}

export {ListOfCategories}