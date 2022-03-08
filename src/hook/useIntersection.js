import { useState, useEffect, useRef } from "react";

function useIntersection(){

    const [isShow, setIsShow] = useState(false)
    const ref = useRef(null);

    useEffect(()=>{
        const observer = new window.IntersectionObserver((entries)=>{
            const { isIntersecting } = entries[0]
            if (isIntersecting) {
                setIsShow(true)
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    },[ref])

    return [isShow, ref]
}

export {useIntersection}