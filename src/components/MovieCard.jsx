import { Link } from "react-router-dom";

const MovieCard = ({ movieProp }) => {

    const { id, title, image, abstract, director } = movieProp
    return (

        <div className="movie-card">
            <h2>{title}</h2>
            <div>
                <img src={image} alt={title} />
            </div>
            <p>Directed by {director || "Anonymous"}</p>
            <p>{abstract}</p>
            <Link to={"/movies/" + id}>Read Reviews</Link>
        </div>

    );
}

export default MovieCard;