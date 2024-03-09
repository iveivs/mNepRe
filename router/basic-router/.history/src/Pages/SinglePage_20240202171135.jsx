import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const SinglePage = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    )
}
export {SinglePage}