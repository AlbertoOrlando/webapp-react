const ReviewCard = ({ reviewProp, onDelete }) => {

    const { name, vote, text } = reviewProp

    return (
        <div className="review_card">
            <p className="review_card_name">{name}</p>
            <p className="review_card_text">{text}</p>
            <strong className="review_card_vote">{vote + "/5"}</strong>
            <button onClick={onDelete}>X</button>
        </div>
    );
}

export default ReviewCard;