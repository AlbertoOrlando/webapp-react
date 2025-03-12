import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry, but the page u are looking for does not exist.</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NotFoundPage