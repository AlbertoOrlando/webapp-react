import { Link } from "react-router-dom";

const MovieCard = () => {
    return (
        <div className="container-moviecard">
            <div className="movie-card">
                <h2>Movie Title</h2>
                <p>Movie Description</p>
                <Link to="/movies/1">Read Reviews</Link>
            </div>
            <div className="movie-card">
                <h2>Movie Title</h2>
                <p>Movie Description</p>
                <Link to="/movies/1">Read Reviews</Link>
            </div>
            <div className="movie-card">
                <h2>Movie Title</h2>
                <p>Movie Description</p>
                <Link to="/movies/1">Read Reviews</Link>
            </div>
            <div className="movie-card">
                <h2>Movie Title</h2>
                <p>Movie Description</p>
                <Link to="/movies/1">Read Reviews</Link>
            </div>
        </div>

    );
}

export default MovieCard;