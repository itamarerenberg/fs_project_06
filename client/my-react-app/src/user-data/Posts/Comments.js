import { useParams } from "react-router-dom"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { useUser } from "../userContext"

export function Comments() {
    const user = useUser()
    const params = useParams()
    const postId = parseInt(params.id)
    const posts = useFetchCached(`/posts?userId=${user.id}`)[0]//get all posts is faster then just 1 - already in LS always.
    const post = posts.find(p=>p.id===postId)
    
    const [comments, setComments] = useFetchCached(`comments?postId=${postId}`)

    const handleChange = (id, value, property) => {
        const updatedComments = [...comments]
        const commentToUpdate = updatedComments.find((comment) => comment.id === id);
        commentToUpdate[property] = value;
        setComments(updatedComments);
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
                </div>
            ))}
        </div>
    );
    return (
        <>
            {post && <h1>Comments of {post.title} Post</h1>}
            {commentsElement}
        </>
    )
}
