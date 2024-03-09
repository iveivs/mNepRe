import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const SinglePage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    
    return (
        <div>
            { post && (
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </>
            )}
        </div>
    )
}
export {SinglePage}