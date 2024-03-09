function Header() {
    return (
        <nav className="purple lighten-2">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    React Movies
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li></li>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
