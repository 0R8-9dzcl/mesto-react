import React from "react";
// import avatar from '../images/image.jpg';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
	const [userAvatar, setUserAvatar] = React.useState('');
	const [userName, setUserName] = React.useState('');
	const [userDescription , setUserDescription ] = React.useState('');
	const [cards, setCards] = React.useState([]);
	React.useEffect(() => {
		Promise.all([ api.getUserInfo(), api.getCards() ])
		.then(([ userInfo, cardList ]) =>{
			setUserAvatar(userInfo.avatar)
			setUserName(userInfo.name)
			setUserDescription(userInfo.about)
			setCards(cardList)
		})
		.catch(err => console.log(err))
	}, [])
	return (
		<>
			<main>
				<section className="profile">
					<div className="profile__container">
						<button className="profile__avatar-edit" onClick={onEditAvatar}>
							<img className="profile__avatar" src={userAvatar} alt="аватарка пользлвателя" />
						</button>
						<div className="profile__info">
							<div className="profile__user">
								<h1 className="profile__name">{userName}</h1>
								<button  className="profile__edit-button" type="button" onClick={onEditProfile}></button>
							</div>
							<p className="profile__caption">{userDescription}</p>
						</div>
					</div>
					<button className="profile__add-button" onClick={onAddPlace} type="button"></button>
				</section>
				<section className="cards">
					<ul className="cards__list">
					{
						cards.map((card) => (
							<Card card={card} key={card._id} onCardClick={onCardClick} />
						))
					}
					</ul>
				</section>
			</main>
		</>
	)
}

export default Main;