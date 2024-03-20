import { useSelector } from "react-redux"
export const Users = () => {
    const users = useSelector()
    return (
        <h3>Users</h3>
    )
}