import React from "react";
import { Category } from '../../components/Category/index'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'
  
function ListOfCategories(){
    return(
        <List>
            {categories.map(category => (
                <Item key={category.id}>     
                    <Category {...category}/>
                </Item>
            ))}
        </List>
    )
}

export {ListOfCategories}