import {useState,useEffect} from "react"

const useFetch=(url)=>{
    
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        //fetch data,authentication-->side effects
        
        // console.log(name)
        // console.log(blogs);
                setTimeout(() => {
                fetch(url)
                    .then(res=>{
                    if(!res.ok){
                        throw Error('could not fetch data for that resource ')
                    }
                    return res.json();
        
                })     //res is an object and res.json will return the json in the form of an js array of objects-->data
                .then(data=>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err)=>{
                    setIsPending(false)
                    setError(err.message)
                })
                }, 1000);
            },[]);
            return {data,isPending,error}; 

}
export default useFetch;