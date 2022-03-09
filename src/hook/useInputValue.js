import React, { useState } from "react";

function useInputValue(inicial_value){

    const [getValue, setValue] = useState(inicial_value);

    const onChange = (e) =>{
        setValue(e.target.value)
    }    

    return{
        getValue,
        onChange
    }
}

export {useInputValue}