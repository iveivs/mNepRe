import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Blogpage = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return ( 
        <div className="container">
            <h1>Blog</h1>
            <p>Some text ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ullam</p>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>

                    </Link>
                ))
            }
        </div>
     );
}
 
export default Blogpage;