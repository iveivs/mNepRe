import React, { useContext} from "react"
import { CustomContext } from "../hooks/Context"
export function Book(props) {
    const {removeBook } = useContext(CustomContext)
    return <div>
        <h3>{props.title}</h3>
        <button onClick={() => removeBook(props.id)}>delete</button>
    </div>
}