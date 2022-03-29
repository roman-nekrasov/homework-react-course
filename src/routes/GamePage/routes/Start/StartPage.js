import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addPokemon, removePokemon } from '../../../../store/gameSlice'

import PokemonCard from '../../../../components/PokemonCard/PokemonCard'

import { dbRef } from '../../../../service/firebase'
import { onValue } from 'firebase/database'

import style from './style.module.css'
import cn from 'classnames'


const StartPage = () => {
	const [cards, setCards] = useState({})
	const [remainingCards, setRemainingCards] = useState(5)

	const dispatch = useDispatch();

	const navigate = useNavigate()

	const getPokemons = (dbRef) => {
		onValue(dbRef, (snapshot) => {
			setCards(snapshot.val())
		}, {
			onlyOnce: true
		});
	}

	const startGame = () => {
		navigate('board')
	}

	useEffect(() => {
		getPokemons(dbRef)
	}, [])

	useEffect(() => {
		if (Object.keys(cards).length) {
			setRemainingCards(() => {
				return (5 - Object.values(cards).filter(card => card.selected).length)
			})
		}
	}, [cards])

	const onClickCard = (dbKey) => {
		if (remainingCards || cards[dbKey].selected) {
			setCards(prevState => {
				return Object.entries(prevState).reduce((acc, item) => {
					const card = { ...item[1] };
					if (item[0] === dbKey) {
						card.selected = !card.selected
					};

					acc[item[0]] = card;

					return acc;
				}, {});
			});

			const isSelected = !cards[dbKey].selected
			isSelected ? dispatch(addPokemon(cards[dbKey])) : dispatch(removePokemon(cards[dbKey].id))
		}
	}

	return (
		<>
			<div className={style.wrapper}>
				{
					remainingCards ?
						<h2 className={style.title}>Let's choose <span>{remainingCards}</span> more pokemons to start!</h2> :
						<h2 className={style.title}>Let's start the GAME!</h2>
				}
				<button className={cn(style['game-button'], { [style.disabled]: remainingCards })} onClick={() => startGame()} disabled={remainingCards}>START GAME</button>
				<div className={style.flex}>
					{
						Object.entries(cards).map(([key, { id, type, values, name, img, active, selected }]) => <PokemonCard
							key={key}
							dbKey={key}
							id={id}
							type={type}
							values={values}
							name={name}
							img={img}
							className={style.fullsize}
							isActive={active}
							isSelected={selected}
							onClickCard={onClickCard}
						/>)
					}
				</div>
			</div>
		</>
	)
}

export default StartPage

	// const rewritePokemonData = (cards, id) => {
	// 	Object.keys(cards).forEach(pokemonKey => {
	// 		if (cards[pokemonKey].id === id) {
	// 			set(ref(database, 'pokemons/' + pokemonKey), { ...cards[pokemonKey] })
	// 				.then(() => {
	// 					console.log('Active status succesfully added!')
	// 				})
	// 				.catch((error) => {
	// 					console.log('error:', error)
	// 				})
	// 		}
	// 	})
	// }

	// const onClickCard = (id) => {
	// 	setCards(prevState => {
	// 		const newState = Object.entries(prevState).reduce((acc, item) => {
	// 			const card = { ...item[1] };
	// 			if (card.id === id) {
	// 				card.active = true;
	// 			};

	// 			acc[item[0]] = card;

	// 			return acc;
	// 		}, {});
	// 		rewritePokemonData(newState, id)
	// 		return newState
	// 	});
	// }