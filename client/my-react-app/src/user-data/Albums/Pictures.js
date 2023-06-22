import { useParams, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { connectionBaseUrl } from "../../dataConnection"
import { useUser } from "../userContext"
import serverFetch from "../../server-connection/serverFetch"

export function Pictures() {
    const user = useUser()
    const params = useParams()
    const albumId = parseInt(params.id)
    const albums = useFetchCached(`albums?userId=${user.id}`)[0]//get all albums is faster then just 1 - already in LS always.
    const album = albums.find(a=>a.id===albumId)
    const [searchParams, setSearchParams] = useSearchParams({n : 0})
    const [changed, setChanged] = useState(false);
    const index = parseInt(searchParams.get("n"))
    const [newTitle, setNewTitle] = useState("");
    const [newUrl, setNewUrl] = useState("");
    const [Picture, setPicture] = useFetchCached(`photos?albumId=${albumId}&_start=${index}`)
    // console.log(Picture)
    const [count, setCount] = useState(0)


    useEffect(() =>{
        serverFetch(`photos/amount?albumId=${albumId}`)
        .then(data=>{
            console.log(data);
            setCount(data.amount)
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

    const changeTitle = (e) => {
        setPicture({...Picture, title: e.target.value})
        setChanged(true);
    }
    
    const save = () => {
        serverFetch(`photos/${Picture.id}`, "PUT", Picture)
        .then(res => {
            console.log(res);
            setChanged(false);
        })
        .catch(error => { alert(`An error occurred: ${error}`)});
    }

    const add = () => {
        serverFetch('photos', 'POST', {albumId : albumId, title: newTitle, thumbnailUrl: newUrl})
        .then(pic=>{
            console.log(pic);
            setNewUrl("");
            setNewTitle("");
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }
    const newUrlChange = (e) => {
        setNewUrl(e.target.value)
    }
    const newTitleChange = (e) => {
        setNewTitle(e.target.value)
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
        <div className="right-to-left">
                    <p className="margin">title: </p><input value={newTitle} className="normal-height" onChange={newTitleChange} /> 
                    <p className="margin">url: </p><input value={newUrl} onChange={newUrlChange} /> 
                    <button className="my-button" onClick={add}>+</button>
                </div>
        <div>
                <button disabled={!changed} className="my-button" onClick={save}>save changes</button>
            </div>
            

    </>
    )
}
