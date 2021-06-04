function PopupWithForm(props) {
	return (
		<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}` }>
			<div className="popup__container">
				<button className="popup__close-button" type="button"></button>
				<form className={`popup__form popup__form_${props.name}" name="${props.name}`} novalidate>
					<h2 className="popup__title">{props.title}</h2>
					{props.children}
					<button className="popup__submit" type="submit" name="submit">{props.buttonText}</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;