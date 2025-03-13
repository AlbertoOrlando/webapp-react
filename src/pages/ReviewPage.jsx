import ReviewCard from '../components/ReviewCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from "../components/ReviewForm"


const ReviewPage = () => {

    const { id } = useParams();

    const redirect = useNavigate();

    const [movie, setMovie] = useState({})

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
            }
            )
            .catch((err) => {
                if (err.response?.status === 404) redirect("/404")
            }
            )
    }

    useEffect(fetchMovie, [])

    const renderReviews = () => {
        return movie?.reviews?.map(review => {
            return <ReviewCard key={review.id} reviewProp={review} />
        });
    };;


    return (
        <>
            <div>
                <div>
                    <img src={movie.image} alt={movie.title} />
                </div>
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.abstract}</p>
            </div>
            <h2>Recensioni</h2>
            {renderReviews()}

            <section>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>
        </>

    );
}

export default ReviewPage;