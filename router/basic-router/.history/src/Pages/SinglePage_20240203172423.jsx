import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const SinglePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState([])

    const goBack 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    
    return (
        <div>
            { post && (
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}> Edit this post</Link>
                </>
            )}
        </div>
    )
}
export {SinglePage}