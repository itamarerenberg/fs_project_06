import { useEffect, useState } from 'react'
import { connectionBaseUrl } from "../dataConnection"

export function useFetchCached(path){
    const [data, setData] = useState([])
 
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(path))
        if (saved) setData(saved)
        else{
            fetch(`${connectionBaseUrl}${path}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                localStorage.setItem(path, JSON.stringify(data))
            })
            .catch(error => {
                console.log('An error occurred:', error)
            })
        }
      }, [path])

      useEffect(() => {
        if (data.length > 0){
            localStorage.setItem(path, JSON.stringify(data))
        }
    }, [data])

    return [data, setData]
}
