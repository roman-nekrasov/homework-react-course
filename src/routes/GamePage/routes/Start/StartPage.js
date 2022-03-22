import { useState, useEffect, useContext, } from 'react'
import { Link } from 'react-router-dom'

import PokemonCard from '../../../../components/PokemonCard/PokemonCard'

import { PokemonContext } from '../../../../context/pokemonContext'
import { dbRef } from '../../../../service/firebase'
import { onValue, set, push } from 'firebase/database'
import style from './style.module.css'


const StartPage = () => {
	const [cards, setCards] = useState({})
	const pokemonContext = useContext(PokemonContext)

	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			setCards(snapshot.val())
		}, {
			onlyOnce: true
		});
	}, [])

	const addNewPokemon = () => {
		const newPokemonRef = push(dbRef);
		const randomPokemon = () => {
			const index = Math.floor(Math.random() * (Object.keys(cards).length + 1));
			const pokemon = cards[Object.keys(cards)[index]];
			pokemon.active = false;
			return pokemon
		}
		const newPokemon = randomPokemon()
		set(newPokemonRef, { ...newPokemon })
		onValue(dbRef, (snapshot) => {
			setCards(snapshot.val())
		}, {
			onlyOnce: true
		});
	}

	const onClickCard = (dbKey) => {
		setCards(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const card = { ...item[1] };
				if (item[0] === dbKey) {
					card.selected = true
				};

				acc[item[0]] = card;

				return acc;
			}, {});
		});
		pokemonContext.onSelect(cards[dbKey], dbKey)
	}

	return (
		<>
			<div className={style.wrapper}>
				<button className={style['switch-button']} onClick={addNewPokemon}>Add new Pokemon</button>
				<Link to={'board'}>To board</Link>
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