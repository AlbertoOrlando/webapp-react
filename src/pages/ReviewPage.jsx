import ReviewCard from '../components/ReviewCard';

const ReviewPage = () => {
    return (
        <>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <h1>titolo libro</h1>
                <p>autore</p>
                <p>recensioni</p>
            </div>
            <h2>Recensioni</h2>
            <div>
                <ReviewCard />
            </div>
        </>

    );
}

export default ReviewPage;