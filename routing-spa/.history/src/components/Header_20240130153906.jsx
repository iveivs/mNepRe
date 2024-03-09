function Header() {
    return (
        <nav className="purple lighten-2">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    React Movies
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Repo</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
export { Header };
