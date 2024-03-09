import { Header } from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Outlet  />

            <Foo/>
        </>
    )
}
export {Layout}