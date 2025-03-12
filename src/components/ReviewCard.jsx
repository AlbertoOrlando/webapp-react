const ReviewCard = ({ reviewProp }) => {

    const { name, vote, text } = reviewProp

    return (
        <div>
            <p>{name}</p>
            <p>{text}</p>
            <strong>{vote + "/5"}</strong>
        </div>
    );
}

export default ReviewCard;