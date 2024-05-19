import { useState,useEffect } from 'react'
const useFetch = (url) => {
  const[loading,setLoading]=useState(true)
  const[data,setData]=useState(null)
  const[error,setError]=useState(null)

  useEffect(()=>{
    fetch(url).then((res)=>{
      if(!res.ok){
        throw new Error("Error fetching data")
      }
      return res.json()
    }).then((data)=>{
      setLoading(false)
      setData(data)
    }).catch((err)=>{
      setLoading(false)
      setError(err)
    })
  },[url])

return {data,loading,error}
}
export default useFetch
