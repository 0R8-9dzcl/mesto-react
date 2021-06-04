import Header from './Header';
import Main from './Main';
import Footer from './Footer.js';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
			<div className="popup popup_upd-avatar">
				<div className="popup__container">
					<button className="popup__close-button" type="button"></button>
					<form className="popup__form popup__form_action_upd" name="updAvatar" novalidate>
						<h2 className="popup__title">Обновить аватар</h2>
						<input className="popup__input popup__input_name_avatar" id="avatar-input" name="avatar" type="url" placeholder="Ссылка на картинку" required />
						<span className="popup__error" id="avatar-input-error"></span>
						<button className="popup__submit" type="submit" name="submit">Сохранить</button>
					</form>
				</div>
			</div>
			<div className="popup popup_edit-profile">
				<div className="popup__container">
					<button className="popup__close-button" type="button"></button>
					<form className="popup__form popup__form_action_edit" name="editProfile" novalidate>
						<h2 className="popup__title">Редактировать профиль</h2>
						<input className="popup__input popup__input_name_name" id="name-input" name="name" type="text" placeholder="Имя пользователя" minlength="2" maxlength="40" required />
						<span className="popup__error" id="name-input-error"></span>
						<input className="popup__input popup__input_name_caption" id="caption-input" name="caption" type="text" placeholder="О себе" minlength="2" maxlength="200" required />
						<span className="popup__error" id="caption-input-error"></span>
						<button className="popup__submit" type="submit" name="submit">Сохранить</button>
					</form>
				</div>
			</div>
			<div className="popup popup_add-card">
				<div className="popup__container">
					<button className="popup__close-button" type="button"></button>
					<form className="popup__form popup__form_action_add" name="addCard" novalidate>
						<h2 className="popup__title">Новое место</h2>
						<input className="popup__input popup__input_name_place" id="place-input" name="place" type="text" placeholder="Название" minlength="2" maxlength="30" required />
						<span className="popup__error" id="place-input-error"></span>
						<input className="popup__input popup__input_name_source" id="source-input" name="source" type="url" placeholder="Ссылка на картинку"required />
						<span className="popup__error" id="source-input-error"></span>
						<button className="popup__submit" type="submit" name="submit">Создать</button>
					</form>
				</div>
			</div>
			<div className="popup_photo popup">
				<div className="popup__photo-box">
					<button className="popup__close-button" type="button"></button>
					<img className="popup__img" src="#" alt=" " />
					<p className="popup__img-caption"></p>
				</div>
			</div>
			<div className="popup popup_confirm">
				<div className="popup__container">
					<button className="popup__close-button" type="button"></button>
					<form className="popup__form popup__form_action_conf" name="confirm" novalidate>
						<h2 className="popup__title">Вы уверены?</h2>
						<button className="popup__submit popup__submit_type_confirm" type="submit" name="submit">Да</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
