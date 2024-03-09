import { Header } from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Outlet  />

            <Foot/>
        </>
    )
}
export {Layout}