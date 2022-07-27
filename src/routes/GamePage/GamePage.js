import { useState, useEffect } from 'react'

import PokemonCard from '../../components/PokemonCard/PokemonCard'

import { database, dbRef } from '../../service/firebase'
import { onValue, ref, set, push } from 'firebase/database'
import style from './style.module.css'


const GamePage = () => {
	const [cards, setCards] = useState({})

	const getPokeons = (dbRef) => {
		onValue(dbRef, (snapshot) => {
			setCards(snapshot.val())
		}, {
			onlyOnce: true
		});
	}

	useEffect(() => {
		getPokeons(dbRef)
	}, [])

	const rewritePokemonData = (cards, id) => {
		Object.keys(cards).forEach(pokemonKey => {
			if (cards[pokemonKey].id === id) {
				set(ref(database, 'pokemons/' + pokemonKey), { ...cards[pokemonKey] })
					.then(() => {
						console.log('Active status succesfully added!')
					})
					.catch((error) => {
						console.log('error:', error)
					})
			}
		})
	}

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

	const onClickCard = (id) => {
		setCards(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const card = { ...item[1] };
				if (card.id === id) {
					card.active = !card.active;
				};

				acc[item[0]] = card;

				return acc;
			}, {});
		});
		setCards(prevState => {
			rewritePokemonData(prevState, id)
			return prevState
		})
	}

	return (
		<>
			<div className={style.wrapper}>
				<button className={style['switch-button']} onClick={addNewPokemon}>Add new Pokemon</button>
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
			</div>
		</>
	)
}

export default GamePage