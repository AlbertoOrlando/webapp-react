import axios from "axios";

import { useState } from "react";

const ReviewForm = ({ movie_id, reloadReviews }) => {
    const initialValue = { name: "", text: "", vote: 1 }

    const [formData, setFormData] = useState(initialValue)

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`

    const submitReview = (e) => {
        e.preventDefault();
        axios.post(urlEndpoint, formData).then(
            () => {
                setFormData(initialValue)
                reloadReviews()
            }
        )
            .catch(err => console.log(err)
            )
    }
    return (
        <div className="form">
            <h5>Aggiungi una recensione</h5>
            <form onSubmit={submitReview}>
                <div className="">
                    <label>Name</label>
                    <input type="text" name="name" className="" value={formData.name} onChange={setFieldValue} />
                </div>
                <div className="">
                    <label>Review</label>
                    <textarea className="" name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                </div>
                <div className="">
                    <label>Voto</label>
                    <input type="number" min="1" max="5" className="" name='vote' value={formData.vote} onChange={setFieldValue} />
                </div>
                <div className="">
                    <button type="submit" className="">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm