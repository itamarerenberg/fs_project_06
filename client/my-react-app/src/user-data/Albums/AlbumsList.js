import { useLocation, useNavigate, useOutletContext } from "react-router-dom"
import { useUser } from "../userContext"
import React  from "react"
import { useState } from 'react'
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import serverFetch from "../../server-connection/serverFetch"

export function AlbumsList() {
    const user = useUser()
    const [albums, setAlbums] = useFetchCached(`albums?userId=${user.id}`)
    const navigate = useNavigate()
    const location = useLocation()
    const [changed, setChanged] = useState(false);
    const [newAlbum, setNewAlbum] = useState("");
    const handleClick = (albumID) => {
        navigate(`${location.pathname}/${albumID}/Pictures`)
    }

    const handleChange = (id, value) => {
        const updatedAlbums = [...albums]
        const albumToUpdate = updatedAlbums.find((album) => album.id === id);
        albumToUpdate.title = value;
        setAlbums(updatedAlbums);
        setChanged(true)
    }

    const deleteAlbum = (e) => {
        serverFetch(`albums/${e.target.value}`, 'DELETE')
        .then(album=>{
            console.log(album);
            const newAlbums = albums.filter(a => a.id != album.id);
            setAlbums(newAlbums)
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const save = () => {
        serverFetch("albums", "PUT", albums)
        .then(res => {
            console.log(res);
            setChanged(false);
        })
        .catch(error => { alert(`An error occurred: ${error}`)});
    }

    const newAlbumChange = (e) => {
        setNewAlbum(e.target.value)
    }

    const add = () => {
        serverFetch('albums', 'POST', {userId: user.id, title: newAlbum})
        .then(album=>{
            console.log(album);
            setAlbums([...albums, album])
            setNewAlbum("");
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }


    const albumsElement = <div className="albums-container">
        {albums.map(album => (
            <div
                key={album.id}
                className="album"
            >
                <input className="readable-input-left"
                        type="text"
                        value={album.title}
                        onChange={(e) => handleChange(album.id, e.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            onClick={() => handleClick(album.id)}
                            className="post-button"
                        >
                            Pictuers
                        </button>
                        <button className="delete-button" value={album.id} onClick={deleteAlbum}>X</button>
                    </div>
            </div>
        ))}
    </div>

    return (
        <>
            <h1>Albums of {user.username}</h1>
            <div className="right-to-left">
                    <input value={newAlbum} onChange={newAlbumChange} /> 
                    <button className="my-button" onClick={add}>+</button>
                </div>
                <br />
            {albumsElement}
            <br />
            <div  >
                <button disabled={!changed} className="my-button" onClick={save}>save changes</button>
            </div>
        </>
    )
}
