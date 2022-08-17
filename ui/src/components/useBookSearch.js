import React, { useEffect, useState } from "react"
import axios from 'axios'


export default function useBookSearch(query, pageNumber) {
        const [loading,setLoading]=useState(true)
        const [error,setError]=useState(false) 
        const [books,setBook]=useState([])
        const [hasMore,setHasMore]=useState(false)

    useEffect(()=>{
        setBook([])
    },[query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel;
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setBook((prevBook)=>{
                return [...new Set([...prevBook,...res.data.docs.map(b=>b.title )])]
            })
            setHasMore(res.data.docs.length>0)
            setLoading(false)
            // console.log(res.data)
        }).catch(error => {
            if (axios.isCancel(error)) return;
            setError(true)
        }
        )

        return () => cancel()
    }, [query, pageNumber])
    return { loading,error,books,hasMore}
    
}