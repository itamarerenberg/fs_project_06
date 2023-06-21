import { useParams, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { connectionBaseUrl } from "../../dataConnection"
import { useUser } from "../userContext"

export function Pictures() {
    const user = useUser()
    const params = useParams()
    const albumId = parseInt(params.id)
    const albums = useFetchCached(`/albums?userId=${user.id}`)[0]//get all albums is faster then just 1 - already in LS always.
    const album = albums.find(a=>a.id===albumId)
    const [searchParams, setSearchParams] = useSearchParams({n : 0})
    const index = parseInt(searchParams.get("n"))
    const Picture = useFetchCached(`/photos?albumId=${albumId}&_start=${index}&_limit=1`)[0][0]
    const [count, setCount] = useState(0)

    useEffect(() =>{//not using the useFetchCached because wanting to get header information and not fetching data
        fetch(`${connectionBaseUrl}/photos?albumId=${albumId}&_limit=0`)
                .then(response => response.headers.get('x-total-count'))
                .then(data => {
                    setCount(data)
                })
        .catch(error => {
            console.log('An error occurred:', error)
        })
    }, [])

    const rightClick = () => {
        setSearchParams({n: index + 1})
    }

    const leftClick = () => {
        setSearchParams({n: index - 1})
    }
    
    return (
    <>
        {Picture && album && <div className="picture-container">
            <h2>Pictures of {album.title} Album</h2>
            <h3>{Picture.title}</h3>
            <div className="image-navigation">
                <button disabled={index === 0} onClick={leftClick}>{'<'}</button>
                <img src={Picture.thumbnailUrl} alt={Picture.title} />
                <button disabled={index === count - 1} onClick={rightClick}>{'>'}</button>
            </div>
        </div>}

    </>
    )
}