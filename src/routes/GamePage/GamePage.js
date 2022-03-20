import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import style from './style.module.css'
import { dbRef } from '../../service/firebase'
import { onValue } from 'firebase/database'


const GamePage = () => {
	const [cards, setCards] = useState({})

	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			setCards(snapshot.val())
		}, {
			onlyOnce: true
		});

	}, [])

	const onClickCard = (id) => {
		setCards(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const card = { ...item[1] };
				if (card.id === id) {
					card.active = true;
				};

				acc[item[0]] = card;

				return acc;
			}, {});
		});
	}

	return (
		<>
			<MenuHeader />
			<div className={style.flex}>
				{
					Object.entries(cards).map(([key, { id, type, values, name, img, active }]) => <PokemonCard
						key={key}
						id={id}
						type={type}
						values={values}
						name={name}
						img={img}
						isActive={active}
						onClickCard={onClickCard}
					/>)
				}
			</div>
			<Footer />
		</>
	)
}

export default GamePage