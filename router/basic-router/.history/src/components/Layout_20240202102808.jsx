import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
            <header className="App-header">
                <NavLink className={({isActive})=> isActive ? 'active-link' : ''} to="/">Home</NavLink>
                <NavLink to="/posts">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <main className="container"> 
                <Outlet />
            </main>
            <footer className="container">2023</footer>
        </>

    );
}
 
export default Layout;