import {useLocation, useNavigate, useOutletContext} from "react-router-dom"
import { useUser } from "../userContext"
import { useState } from "react"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import serverFetch from "../../server-connection/serverFetch"

export function PostsList() {
    const user = useUser()
    const [posts, setPosts] = useFetchCached(`posts?userId=${user.id}`)
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [changed, setChanged] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const navigate = useNavigate()
    const location = useLocation()

    const handleButtonClick = (postId) => {
        navigate(`${location.pathname}/${postId}/comments`)
    };

    const handleClick = (postId) => {
        setSelectedPostId(postId);
    };

    const save = () => {
        serverFetch("posts", "PUT", posts)
        .then(res => {
            console.log(res);
            setChanged(false);
        })
        .catch(error => { alert(`An error occurred: ${error}`)});
    }

    const handleChange = (id, value, property) => {
        const updatedPosts = [...posts]
        const postToUpdate = updatedPosts.find((post) => post.id === id);
        postToUpdate[property] = value;
        setPosts(updatedPosts);
        setChanged(true);
    }

    const deletePost = (e) => {
        serverFetch(`posts/${e.target.value}`, 'DELETE')
        .then(post=>{
            console.log(post);
            const newPosts = posts.filter(p => p.id != post.id);
            setPosts(newPosts)
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const postsElement = (
        <div className="posts-container">
            {posts.map((post) => (
                <div
                    key={post.id}
                    onClick={() => handleClick(post.id)}
                    className={`post ${post.id === selectedPostId ? 'selected' : ''}`}
                >
                    <div className="post-content">
                    <textarea
                        type="text"
                        value={post.title}
                        onChange={(e) => handleChange(post.id, e.target.value, "title")}
                        className="post-title"
                    />
                    <textarea
                        type="text"
                        value={post.body}
                        onChange={(e) => handleChange(post.id, e.target.value, "body")}
                        className="post-body"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            onClick={() => handleButtonClick(post.id)}
                            className="post-button"
                        >
                            Comments
                        </button>
                        <button className="delete-button" value={post.id} onClick={deletePost}>X</button>
                    </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );

    const newTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const newBodyChange = (e) => {
        setNewBody(e.target.value);
    }

    const add = () => {
        serverFetch('posts', 'POST', {userId: user.id, title: newTitle, body: newBody})
        .then(post=>{
            console.log(post);
            setPosts([...posts, post])
            setNewBody("");
            setNewTitle("");
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    return (
        <>
            <h1>Posts of {user.username}</h1>
            <div className="right-to-left">
                    <p className="margin">title: </p><input className="normal-height" value={newTitle} onChange={newTitleChange} /> 
                    <p className="margin">body: </p><textarea value={newBody} onChange={newBodyChange} /> 
                    <button className="my-button" onClick={add}>+</button>
                </div>
                <br />
            {postsElement}
            <div  >
                <button disabled={!changed} className="my-button" onClick={save}>save changes</button>
            </div>
        </>

    )
}
