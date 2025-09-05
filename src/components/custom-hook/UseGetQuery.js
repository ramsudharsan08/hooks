import { useEffect, useState } from "react"

export default function UseGetQuery(config= {}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetch(config.url)
        .then(res => res.json())
        .then(res => setData(res))
        .catch((err) => console.log(err))
        .finally(()=> {
            setIsLoading(false);
        })
    },[]) 

    return {data, isLoading}
}