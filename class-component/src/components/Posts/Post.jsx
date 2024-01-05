export function Post (props) {
    return <h3>{props.name} <button onClick={() => {props.deletePost(props.id)}}>Delete</button></h3>
}