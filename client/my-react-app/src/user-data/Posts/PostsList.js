import {useLocation, useNavigate, useOutletContext} from "react-router-dom"
import { useUser } from "../userContext"
import { useState } from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"


export function PostsList() {
    const user = useUser()
    const posts = useFetchCached(`/posts?userId=${user.id}`)[0]
    const [selectedPostId, setSelectedPostId] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()

    const handleButtonClick = (postId) => {
        navigate(`${location.pathname}/${postId}/comments`)
    };

    const handleClick = (postId) => {
        setSelectedPostId(postId);
    };


    const postsElement = (
        <div className="posts-container">
            {posts.map((post) => (
                <div
                    key={post.id}
                    onClick={() => handleClick(post.id)}
                    className={`post ${post.id === selectedPostId ? 'selected' : ''}`}
                >
                    <div className="post-content">
                        <div className="post-title">{post.title}</div>
                        <div className="post-body">{post.body}</div>
                        <button
                            onClick={() => handleButtonClick(post.id)}
                            className="post-button"
                        >
                            Comments
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );




    return (
        <>
            <h1>Posts of {user.username}</h1>
            {postsElement}
        </>

    )
}
