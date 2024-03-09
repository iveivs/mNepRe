import { NavLink, Outlet } from "react-router-dom";

const  

const Layout = () => {
    return ( 
        <>
            <header className="App-header">
                {/* громоздкий вариант */}
                {/* <NavLink className={({isActive})=> isActive ? 'active-link' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active-link' : ''}  to="/posts">Blog</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active-link' : ''}  to="/about">About</NavLink> */}
                
                {/* более лаконичный вариант */}
            </header>
            <main className="container"> 
                <Outlet />
            </main>
            <footer className="container">2023</footer>
        </>

    );
}
 
export default Layout;