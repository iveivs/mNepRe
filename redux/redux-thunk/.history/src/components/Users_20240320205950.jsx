import { useSelector } from "react-redux"
export const Users = () => {
    const users = useSelector(state => state.users)
    return (
        <h3>
            Users

        </h3>
    )
}