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

    const deleteReview = (reviewId) => {
        axios
            .delete(`http://localhost:3000/api/movies/${movie.id}/reviews/${reviewId}`)
            .then((response) => {
                if (response.status === 204) {
                    // Aggiorna le recensioni nel movie state
                    setMovie({
                        ...movie,
                        reviews: movie.reviews.filter((review) => review.id !== reviewId),
                    });
                    console.log(`Recensione con ID ${reviewId} eliminata con successo.`);
                } else {
                    console.error(`Errore durante l'eliminazione della recensione con ID ${reviewId}. Stato: ${response.status}`);
                }
            })
            .catch((error) => {
                console.error(`Errore durante l'eliminazione della recensione con ID ${reviewId}:`, error);
            });
    };

    useEffect(fetchMovie, [])

    const renderReviews = () => {
        return movie?.reviews?.map(review => {
            return <ReviewCard key={review.id} reviewProp={review} onDelete={() => deleteReview(review.id)} />
        });
    };;


    return (
        <>
            <div>
                <div className='review_image'>
                    <img src={movie.image} alt={movie.title} />
                </div>
                <h1 className='review_title'>{movie.title}</h1>
                <p className='review_director'>{movie.director}</p>
                <p className='review_abstract'>{movie.abstract}</p>
            </div>
            <h2 className='review_title_gen'>Recensioni</h2>
            {renderReviews()}

            <section>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>
        </>

    );
}

export default ReviewPage;