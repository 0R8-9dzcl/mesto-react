function ImagePopup() {
	return(
		<div className="popup_photo popup">
			<div className="popup__photo-box">
				<button className="popup__close-button" type="button"></button>
				<img className="popup__img" src="#" alt=" " />
				<p className="popup__img-caption"></p>
			</div>
		</div>
	);
}

export default ImagePopup;