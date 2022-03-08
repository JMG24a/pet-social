function useLocalStorage(){

    const getData = (key) =>{
        try{
            const appStorage = JSON.parse(localStorage.getItem(key))
            return appStorage
        }
        catch(e){
            console.log('este error')
            return false
        }
    }

    const setData = (key, type) =>{
        try{
            localStorage.setItem(key, JSON.stringify(type))
        }
        catch(e){
            console.log(e)
        }
    } 

    return [
        getData,
        setData
    ]
}

export {useLocalStorage}