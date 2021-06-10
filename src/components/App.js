import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard ] = React.useState({});

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	};
	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	};
	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	};
	const handleCardClick  = (card) => {
		setSelectedCard(card);
	}
	const closeAllPopups = () => {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard({});
	};


	return (
		<>
			<Header />
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onCardClick={handleCardClick}
			/>
			<Footer />
			<PopupWithForm
				name={'avatar'}
				title={'Обновить аватар'}
				buttonText={'Сохранить'}
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				>
				<input
					name='avatar'
					placeholder='Ссылка на картинку'
					className='popup__input popup__input_type_avatar'
					type='url'
					required
				/>
				<span id="avatar-error" className="popup__error"></span>
			</PopupWithForm>
			<PopupWithForm
				name={'profile'}
				title={'Редактировать профиль'}
				buttonText={'Сохранить'}
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				>
				<input 
					name="profile"
					placeholder="Имя пользователя"
					className='popup__input popup__input_type_profile'
					type="text"
					minLength="2"
					maxLength="40"
					required
				/>
				<span className="popup__error" id="profile-error"></span>
				<input 
					name='caption'
					placeholder='О себе'
					className='popup__input popup__input_type_caption'
					type='text'
					minLength='2'
					maxLength='200'
					required
				/>
				<span className="popup__error" id="caption-error"></span>
			</PopupWithForm>
			<PopupWithForm
				name={'card'}
				title={'Новое место'}
				buttonText={'Добавить'}
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				>
				<input
					name="place"
					placeholder="Название"
					className="popup__input popup__input_type_place"
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<span className="popup__error" id="place-error"></span>
				<input
					name='place-link'
					placeholder='Ссылка на картинку'
					className='popup__input popup__input_type_place-link'
					type='url'
					required
				/>
				<span id="place-link-error" className="popup__error"></span>
			</PopupWithForm>
			<PopupWithForm
				name={'confirm'}
				title={'Вы уверены?'}
				buttonText={'Да'}
				isOpen={''}
			/>
			<ImagePopup card={selectedCard} onClose={closeAllPopups} />
		</>
	);
}

export default App;
