import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <Link to="/">Back to Home</Link>
            </nav>
            <p>© 2021</p>
        </footer>
    );
}

export default Footer;