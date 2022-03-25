import { useState } from "react"
import { Outlet } from "react-router-dom"
import { PokemonContext } from "../../context/pokemonContext"

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([])
	const [playersCards, setplayersCards] = useState([])

	const handleSelectPokemons = (pokemon, dbKey, isSelected) => {
		setSelectedPokemons(prevState => {
			if (isSelected) {
				pokemon.dbKey = dbKey
				return [...prevState, pokemon]
			} else {
				const pokemons = prevState.filter(item => item.dbKey !== dbKey)
				return [...pokemons]
			}
		})
	}

	const handleCLearPokemons = () => {
		setSelectedPokemons([])
	}

	const handlePlayersCards = (cards) => {
		setplayersCards(cards)
	}

	return (
		<>
			<PokemonContext.Provider value={{
				selectedPokemons,
				playersCards,
				newGame: null,
				onSelect: handleSelectPokemons,
				onStartGame: handleCLearPokemons,
				onFinishGame: handlePlayersCards,
			}}>
				<Outlet />
			</PokemonContext.Provider>
		</>
	)
}

export default GamePage