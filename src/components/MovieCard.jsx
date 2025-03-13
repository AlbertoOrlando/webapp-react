import { Link } from "react-router-dom";

const MovieCard = ({ movieProp, onDelete }) => {

    const { id, title, image, abstract, director } = movieProp
    return (

        <div className="movie-card">
            <h2>{title}</h2>
            <div className="copertina_card">
                <img src={image} alt={title} />
            </div>
            <p>Directed by {director || "Anonymous"}</p>
            <p>{abstract}</p>
            <Link to={"/movies/" + id}>Read Reviews</Link>
            <button onClick={onDelete}>X</button>
        </div>

    );
}

export default MovieCard;