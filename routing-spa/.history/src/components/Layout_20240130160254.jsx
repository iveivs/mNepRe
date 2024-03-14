import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet  />

            <Footer/>
        </>
    )
}
export {Layout}