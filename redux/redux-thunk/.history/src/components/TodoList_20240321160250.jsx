import { useSelector } from "react-redux"
export const TodoList = () => {
    const todos = useSelector(sta)
    return (
        <>
        <input type="text"  placeholder="Some Text"/>
        </>
    )
}