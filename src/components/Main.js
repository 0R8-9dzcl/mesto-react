import avatar from '../images/image.jpg';

function Main() {
	function handleEditAvatarClick() {
		document.querySelector('.popup_upd-avatar').classList.add('popup_opened')
	}
	function handleEditProfileClick() {
		document.querySelector('.popup_edit-profile').classList.add('popup_opened')
	}
	function handleAddPlaceClick() {
		document.querySelector('.popup_add-card').classList.add('popup_opened')
	}
	return (
		<>
			<main>
				<section className="profile">
					<div className="profile__container">
						<button className="profile__avatar-edit" onClick={handleEditAvatarClick}>
							<img className="profile__avatar" src={avatar} alt="аватарка пользлвателя" />
						</button>
						<div className="profile__info">
							<div className="profile__user">
								<h1 className="profile__name"></h1>
								<button  className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
							</div>
							<p className="profile__caption"></p>
						</div>
					</div>
					<button className="profile__add-button"  type="button" onClick={handleAddPlaceClick}></button>
				</section>
				<section className="cards">
					<ul className="cards__list"></ul>
				</section>
			</main>
		</>
	)
}

export default Main;