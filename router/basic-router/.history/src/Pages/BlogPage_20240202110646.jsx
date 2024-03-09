import { useState, useEffect } from "react";
const Blogpage = () => {
    const [posts, setPost] = useState([])

    useEffect(())

    return ( 
        <div className="container">
            <h1>Blog</h1>
            <p>Some text ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ullam</p>
        </div>
     );
}
 
export default Blogpage;