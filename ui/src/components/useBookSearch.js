import React,{useEffect,useState} from "react"
import axios from 'axios'


export default function useBookSearch(query,pageNumber){
    let cancel ;
    useEffect(()=>{
        axios({
            method:'GET',
            url:'http://openlibrary.org/search.json',
            params:{q:query,page:pageNumber},
            cancelToken:new axios.CancelToken(c=>cancel=c)
        }).then(res=>{
            console.log(res.data)
        }).catch(error=>{
            if(axios.isCancel(error)) return;
        }
)

        return()=>cancel()
    },[query,pageNumber])
    return(
        <div>
            
        </div>
    )
}