import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
const Layout = () => {
    return (
        <>
            <Header />
            <main></main>
            <Outlet  />

            <Footer/>
        </>
    )
}
export {Layout}