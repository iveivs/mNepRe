import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="container">
            <h1>NOT FOUND PAGE</h1>
            <p> this page dosn't exist. Go to <Link to="/">Home page</Link> </p>
        </div>
    );
}
 
export default NotFound;