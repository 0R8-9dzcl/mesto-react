function Card({ card, onCardClick }) {
    const handleCardClick = () => {
        onCardClick(card);
    };
	return (
		<li className="card">
            <button className="card__delete" type="button"></button>
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleCardClick} />
            <div className="card__caption">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like" type="button"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
	)
}
export default Card;