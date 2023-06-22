import { useParams, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { connectionBaseUrl } from "../../dataConnection"
import { useUser } from "../userContext"

export function Pictures() {
    const user = useUser()
    const params = useParams()
    const albumId = parseInt(params.id)
    const albums = useFetchCached(`albums?userId=${user.id}`)[0]//get all albums is faster then just 1 - already in LS always.
    const album = albums.find(a=>a.id===albumId)
    const [searchParams, setSearchParams] = useSearchParams({n : 0})
    const index = parseInt(searchParams.get("n"))
    const [Picture, setPicture] = useFetchCached(`photos?albumId=${albumId}&_start=${index}`)
    console.log(Picture)
    const [count, setCount] = useState(50)

    const rightClick = () => {
        setSearchParams({n: index + 1})
    }

    const leftClick = () => {
        setSearchParams({n: index - 1})
    }

    const changeTitle = (e) => {
        setPicture({...Picture, title: e.target.value})
    }
    
    return (
    <>
        {Picture && album && <div className="picture-container">
            <h2>Pictures of {album.title} Album</h2>
            <input className="readable-input-black" value={Picture.title} onChange={changeTitle}/>
            <div className="image-navigation">
                <button disabled={index === 0} onClick={leftClick}>{'<'}</button>
                <img src={Picture.thumbnailUrl} alt={Picture.title} />
                <button disabled={index === count - 1} onClick={rightClick}>{'>'}</button>
            </div>
        </div>}

    </>
    )
}
