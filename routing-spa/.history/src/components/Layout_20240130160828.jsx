import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
const Layout = () => {
    return (
        <>
            <Header />
            <main className="container c">
                <Outlet  />
            </main>
            

            <Footer/>
        </>
    )
}
export {Layout}