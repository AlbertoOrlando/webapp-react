import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="home_but">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav_cont_other_but">
                    <Link to="/movies">Movies</Link>
                    <Link to="/movies/create">Add movies</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;