import { useLocation, useNavigate, useOutletContext } from "react-router-dom"
import { useUser } from "../userContext"
import React  from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"

export function AlbumsList() {
    const user = useUser()
    const albums = useFetchCached(`/albums?userId=${user.id}`)[0]
    const navigate = useNavigate()
    const location = useLocation()
    console.log(albums)
    const handleClick = (albumID) => {
        navigate(`${location.pathname}/${albumID}/Pictures`)
    }


    const albumsElement = <div className="albums-container">
        {albums.map(album => (
            <div
                key={album.id}
                onClick={() => handleClick(album.id)}
                className="album"
            >
                {album.title}
            </div>
        ))}
    </div>

    return (
        <>
            <h1>Albums of {user.username}</h1>
            {albumsElement}
        </>
    )
}
