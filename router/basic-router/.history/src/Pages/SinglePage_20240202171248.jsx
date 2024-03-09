import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const SinglePage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    const {id} = useParams()
    return (
        <div>
            { post && (
                <>
                
                </>
            )}
        </div>
    )
}
export {SinglePage}