import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url)=>{

    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [err,seterr]=useState(false)

    useEffect(()=>{
const fetch=async()=>{
    setloading(true);
    try {
        const res=await axios.get(url);
       setdata(res.data)
    } catch (error) {
        seterr(err)
    }
setloading(false)
}
fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    const refetch=async()=>{
        setloading(true);
        try {
            const res=await axios.get(url);
            setdata(res.data)
        } catch (error) {
            seterr(err)
        }
    setloading(false)
    }
    return({data,loading,err,refetch});
}