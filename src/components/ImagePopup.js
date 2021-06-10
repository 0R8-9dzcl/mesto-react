function ImagePopup(props) {
	return(
		<div className={`popup popup_type_image ${props.card.link ? `popup_opened `: ``}` }>
			<div className="popup__photo-box">
				<button className="popup__close-button" type="button" onClick={props.onClose}></button>
				<img className="popup__img" src={props.card.link} alt={props.card.title} />
				<p className="popup__img-caption">{props.card.title}</p>
			</div>
		</div>
	);
}

export default ImagePopup;