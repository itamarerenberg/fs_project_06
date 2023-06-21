import { useEffect, useState } from 'react'
import { connectionBaseUrl } from "../dataConnection"
import serverFetch from '../server-connection/serverFetch'

export function useFetchCached(path){
    const [data, setData] = useState([])
 
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(path))
        if (saved) setData(saved)
        else{
            serverFetch(path)
            // fetch(`${connectionBaseUrl}${path}`)
            // .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
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
