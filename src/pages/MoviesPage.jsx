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

    const deleteMovies = (id) => { // Aggiunto l'ID come parametro
        axios
            .delete(`http://localhost:3000/api/movies/${id}`) // Utilizzo template literals
            .then((response) => {
                if (response.status === 204) {
                    // Aggiorna lo stato rimuovendo il film eliminato
                    setMovies(movies.filter((movie) => movie.id !== id));
                    console.log(`Film con ID ${id} eliminato con successo.`);
                } else {
                    console.error(`Errore durante l'eliminazione del film con ID ${id}. Stato: ${response.status}`);
                }
            })
            .catch((error) => {
                console.error(`Errore durante l'eliminazione del film con ID ${id}:`, error);
            });
    };

    useEffect(fetchMovies, [])

    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div className="container-moviecard" key={movie.id}>
                    <MovieCard movieProp={movie} onDelete={() => deleteMovies(movie.id)} />
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