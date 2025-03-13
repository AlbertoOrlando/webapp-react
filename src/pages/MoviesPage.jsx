import MovieCard from '../components/MovieCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then((res) => {
                setMovies(res.data)
            }
            )
            .catch(err => console.log(err)
            )
    }

    useEffect(fetchMovies, [])

    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div className="container-moviecard" key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        }
        )
    }

    return (
        <>
            <h1 className='movies_titolo_gen'>Lista dei Film</h1>
            <div className="container-movies">
                {renderMovies()}
            </div>
        </>



    );
}

export default MoviesPage;