import { useState, useEffect } from "react";

const useIsOnline = () => {
    // checks if online
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });
        window.addEventListener("online",()=>{
            setIsOnline(true);
        });
        
    },[])

    return isOnline;
};

export default useIsOnline;