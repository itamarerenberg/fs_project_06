import { useParams } from "react-router-dom"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { useUser } from "../userContext"
import { useState } from 'react'
import serverFetch from "../../server-connection/serverFetch"

export function Comments() {
    const user = useUser()
    const params = useParams()
    const postId = parseInt(params.id)
    const posts = useFetchCached(`/posts?userId=${user.id}`)[0]//get all posts is faster then just 1 - already in LS always.
    const post = posts.find(p=>p.id===postId)
    const [changed, setChanged] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const [comments, setComments] = useFetchCached(`comments?postId=${postId}`)

    const save = () => {
        serverFetch("comments", "PUT", comments)
        .then(res => {
            console.log(res);
            setChanged(false);
        })
        .catch(error => { alert(`An error occurred: ${error}`)});
    }

    const handleChange = (id, value, property) => {
        const updatedComments = [...comments]
        const commentToUpdate = updatedComments.find((comment) => comment.id === id);
        commentToUpdate[property] = value;
        setComments(updatedComments);
        setChanged(true)
    }

    const deleteComment = (e) => {
        serverFetch(`comments/${e.target.value}`, 'DELETE')
        .then(comment=>{
            console.log(comment);
            const newComments = comments.filter(c => c.id != comment.id);
            setComments(newComments)
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const newTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const newBodyChange = (e) => {
        setNewBody(e.target.value);
    }

    const add = () => {
        serverFetch('comments', 'POST', {postId: postId, name: newTitle, body: newBody, email: user.email})
        .then(comment=>{
            console.log(comment);
            setComments([...comments, comment])
            setNewBody("");
            setNewTitle("");
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const commentsElement = (
        <div className="comments-container">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <input className="readable-input-left"
                        type="text"
                        value={comment.name}
                        onChange={(e) => handleChange(comment.id, e.target.value, "name")}
                    />
                    <h5>Email: {comment.email}</h5>
                    <input className="readable-input-left"
                        type="text"
                        value={comment.body}
                        onChange={(e) => handleChange(comment.id, e.target.value, "body")}
                    />
                    <button className="delete-button" value={comment.id} onClick={deleteComment}>X</button>
                </div>
            ))}
        </div>
    );
    return (
        <>
            {post && <h1>Comments of {post.title} Post</h1>}
            <br />
            <div className="right-to-left">
                    <p className="margin">title: </p><input className="normal-height" value={newTitle} onChange={newTitleChange} /> 
                    <p className="margin">body: </p><textarea value={newBody} onChange={newBodyChange} /> 
                    <button className="my-button" onClick={add}>+</button>
                </div>
                <br />
            {commentsElement}
            <div  >
                <button disabled={!changed} className="my-button" onClick={save}>save changes</button>
            </div>
        </>
    )
}
