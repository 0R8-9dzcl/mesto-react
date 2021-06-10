function Card(props) {
    const handleCardClick = () => {
        props.onCardClick(props.card);
    };
	return (
		<li className="card" id={props.card._id}>
            <button className="card__delete" type="button"></button>
            <img className="card__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
            <div className="card__caption">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like" type="button"></button>
                    <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
	)
}
export default Card;