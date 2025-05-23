import axios from "axios";
// importiamo parte LInk del modulo react-router
import { Link, useNavigate } from "react-router-dom"
// importiamo lo useState
import { useState } from "react";

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/api/movies";


const CreateMoviesPage = () => {

    // navigazione
    const navigate = useNavigate();


    // states iniziali
    const [formDataOgj, setFormDataOgj] = useState(initialData);



    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
        else setFormDataOgj({ ...formDataOgj, [name]: value });
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formDataOgj.title || !formDataOgj.director || !formDataOgj.image || !formDataOgj.abstract) {
            setErrorMessage("Compila tutti i campi obbligatori.");
            return;
        }

        // // Inviamo i dati al backend con axios e reindirizziamo alla home
        axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                // () => { navigate("/") }
                setFormDataOgj(initialData)
            )
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <header className="cont_tit_gen">
                <h1>Add a new movie</h1>
            </header>

            <section id="cont_form">

                <form className="form_add_movie" onSubmit={handleSubmit}>
                    <div className="movie_tit_form_cont">
                        <label>Title:</label>
                        <input
                            className="movie_tit_form"
                            name="title"
                            type="text"
                            value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="movie_dir_form_cont">
                        <label>Director:</label>
                        <input
                            className="movie_dir_form"
                            name="director"
                            type="text"
                            value={formDataOgj.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="movie_img_form_cont">
                        <label>Image:</label>
                        <input
                            className="movie_img_form"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="movie_abs_form_cont">
                        <label>Abstract:</label>
                        <textarea
                            value={formDataOgj.abstract}
                            className="movie_abs_form"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="movie_but_form_cont">
                        <Link className="movie_a_form" to="/">Back</Link>
                        <button className="movie_but_form" type="submit">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </>

    )
}

export default CreateMoviesPage