import React from "react";

function useGet(api){
    
    const [getLoading, setLoading] = React.useState(false);
    const [getResponse, setResponse] = React.useState([])

    React.useEffect(()=>{

        setLoading(true) 
    
        window.fetch(api)
        .then(res => res.json())
        .then(response => {
            setResponse(response)
            setLoading(false) 
        })
    
    },[])

    return[
        getLoading,
        getResponse
    ]
}

export {useGet}