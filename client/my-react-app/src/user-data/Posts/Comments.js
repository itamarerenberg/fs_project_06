import { useParams } from "react-router-dom"
import { useFetchCached } from "../../custom-hooks/useFetchCached"
import { useUser } from "../userContext"

export function Comments() {
    const user = useUser()
    const params = useParams()
    const postId = parseInt(params.id)
    const posts = useFetchCached(`/posts?userId=${user.id}`)[0]//get all posts is faster then just 1 - already in LS always.
    const post = posts.find(p=>p.id===postId)
    
    const Comments = useFetchCached(`/comments?postId=${postId}`)[0]

    const commentsElement = (
        <div className="comments-container">
            {Comments.map((comment, index) => (
                <div key={index} className="comment">
                    <h2>{comment.name}</h2>
                    <h5>Email: {comment.email}</h5>
                    <div className="comment-content">{comment.body}</div>
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
