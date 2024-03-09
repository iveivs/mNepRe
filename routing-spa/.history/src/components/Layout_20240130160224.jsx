import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
const Layout = () => {
    return (
        <>
            <Outlet  />

            <Footer/>
        </>
    )
}
export {Layout}